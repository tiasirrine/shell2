import React, {Component} from 'react';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import MomentUtils from 'material-ui-pickers/utils/moment-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import {Redirect, Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import {IntlProvider} from 'react-intl'
import 'react-big-calendar/lib/less/styles.less';
import 'styles/bootstrap.scss'
import 'styles/app.scss';
import 'styles/app-rtl.scss';
import defaultTheme from './themes/defaultTheme';
import AppLocale from '../lngProvider';

import MainApp from 'app/index';
import RTL from 'util/RTL';
import asyncComponent from 'util/asyncComponent';

class App extends Component {

    render() {
        const {match, location, locale, isDirectionRTL} = this.props;
        if (location.pathname === '/') {
            return ( <Redirect to={'/app/sample-page'}/> );
        }
        let applyTheme = createMuiTheme(defaultTheme);
        if (isDirectionRTL) {
            applyTheme.direction = 'rtl';
            document.body.classList.add('rtl')
        } else {
            document.body.classList.remove('rtl');
            applyTheme.direction = 'ltr';
        }

        const currentAppLocale = AppLocale[locale.locale];
        return (
            <MuiThemeProvider theme={applyTheme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    <IntlProvider
                        locale={currentAppLocale.locale}
                        messages={currentAppLocale.messages}>
                        <RTL>
                            <div className="app-main"><Switch>
                                <Route path={`${match.url}app`} component={MainApp}/>
                                <Route
                                    component={asyncComponent(() => import('components/Error404'))}/>
                            </Switch>
                            </div>
                        </RTL>
                    </IntlProvider>
                </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = ({settings}) => {
    const {sideNavColor, locale, isDirectionRTL} = settings;
    return {sideNavColor, locale, isDirectionRTL}
};

export default connect(mapStateToProps)(App);

