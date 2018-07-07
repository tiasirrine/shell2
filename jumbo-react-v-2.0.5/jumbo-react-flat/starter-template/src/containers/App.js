import React, {Component} from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'react-big-calendar/lib/less/styles.less';
import "react-toggle-switch/dist/css/switch.min.css";
import 'rc-drawer/assets/index.css';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import 'styles/app-rtl.scss';
import AppLocale from '../lngProvider';

import MainApp from 'app/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {setInitUrl} from '../actions/Auth';
import asyncComponent from "util/asyncComponent";

const RestrictedRoute = ({component: Component, ...rest, authUser}) =>
    <Route
        {...rest}
        render={props =>
            authUser
                ? <Component {...props} />
                : <Redirect
                    to={{
                        pathname: '/signin',
                        state: {from: props.location}
                    }}
                />}
    />;

class App extends Component {

    componentWillMount() {
        if (this.props.initURL === '') {
            this.props.setInitUrl(this.props.history.location.pathname);
        }
    }


    render() {
        const {match, location, locale, authUser, initURL, isDirectionRTL} = this.props;
        if (location.pathname === '/') {
            if (authUser === null) {
                return ( <Redirect to={'/signin'}/> );
            } else if (initURL === '' || initURL === '/' || initURL === '/signin') {
                return ( <Redirect to={'/app/sample-page'}/> );
            } else {
                return ( <Redirect to={initURL}/> );
            }
        }

        // for RTL Support
        if (isDirectionRTL) {
            document.body.classList.add('rtl')
        } else {
            document.body.classList.remove('rtl');
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.messages}
            >
                <div className="app-main">
                    <Switch>
                        <RestrictedRoute path={`${match.url}app`} authUser={authUser}
                                         component={MainApp}/>
                        <Route path='/signin' component={SignIn}/>
                        <Route path='/signup' component={SignUp}/>
                        <Route
                            component={asyncComponent(() => import('components/Error404'))}/>
                    </Switch>
                </div>
            </IntlProvider>
        );
    }
}

const mapStateToProps = ({settings, auth}) => {
    const {locale, isDirectionRTL} = settings;
    const {authUser, initURL} = auth;
    return {locale, isDirectionRTL, authUser, initURL}
};

export default connect(mapStateToProps, {setInitUrl})(App);
