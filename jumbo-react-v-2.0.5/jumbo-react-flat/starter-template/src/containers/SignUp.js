import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Link } from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import {
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGithubSignIn,
    userGoogleSignIn,
    userSignUp,
    userTwitterSignIn
} from 'actions/Auth'

import CircularProgress from 'components/CircularProgress'

class SignUp extends React.Component {
    constructor () {
        super ();
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    componentDidUpdate () {
        if (this.props.showMessage) {
            setTimeout (() => {
                this.props.hideMessage ();
            }, 3000);
        }
        if (this.props.authUser !== null) {
            this.props.history.push ('/');
        }
    }

    render () {
        const {
            name,
            email,
            password
        } = this.state;
        const { showMessage, loader, alertMessage } = this.props;
        return (
            <div
                className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
                <div className="app-login-main-content">
                    <div className="app-logo-content d-flex align-items-center justify-content-center">
                        <Link className="logo-lg" to="/" title="Jambo">
                            <img src="http://via.placeholder.com/177x65" alt="jambo" title="jambo" />
                        </Link>
                    </div>

                    <div className="app-login-content">
                        <div className="app-login-header">
                            <h1>Sign Up</h1>
                        </div>

                        <div className="mb-4">
                            <h2><IntlMessages id="appModule.createAccount" /></h2>
                        </div>

                        <div className="app-login-form">
                            <form method="post" action="/">

                                <div className="form-group mb-3">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        onChange={(event) => this.setState ({ name: event.target.value })}
                                        defaultValue={name}
                                        className="form-control form-control-lg"
                                    />
                                </div>


                                <div className="form-group mb-3">
                                    <input
                                        type="email"
                                        onChange={(event) => this.setState ({ email: event.target.value })}
                                        placeholder="Email"
                                        defaultValue={email}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="form-group mb-3">
                                    <input
                                        type="password"
                                        onChange={(event) => this.setState ({ password: event.target.value })}
                                        placeholder="Password"
                                        defaultValue={password}
                                        className="form-control form-control-lg"
                                    />
                                </div>

                                <div className="mb-3 d-flex align-items-center justify-content-between">
                                    <Button onClick={() => {
                                        this.props.showAuthLoader ();
                                        this.props.userSignUp ({ email, password });
                                    }} color="primary" className="text-uppercase">
                                        <IntlMessages
                                            id="appModule.regsiter" />
                                    </Button>
                                    <Link to="/signin">
                                        <IntlMessages id="signUp.alreadyMember" />
                                    </Link>
                                </div>
                                <div className="app-social-block my-1 my-sm-3">
                                    <IntlMessages
                                        id="signIn.connectWith" />
                                    <ul className="social-link">
                                        <li>
                                            <span className="icon-btn icon"
                                                  onClick={() => {
                                                      this.props.showAuthLoader ();
                                                      this.props.userFacebookSignIn ();
                                                  }}>
                                                <i className="zmdi zmdi-facebook zmdi-hc-lg" />
                                            </span>
                                        </li>

                                        <li>
                                            <span className="icon-btn icon"
                                                  onClick={() => {
                                                      this.props.showAuthLoader ();
                                                      this.props.userTwitterSignIn ();
                                                  }}>
                                                <i className="zmdi zmdi-twitter zmdi-hc-lg" />
                                            </span>
                                        </li>

                                        <li>
                                            <span className="icon-btn icon"
                                                  onClick={() => {
                                                      this.props.showAuthLoader ();
                                                      this.props.userGoogleSignIn ();

                                                  }}>
                                                <i className="zmdi zmdi-google-plus zmdi-hc-lg" />
                                            </span>
                                        </li>

                                        <li>
                                            <span className="icon-btn icon"
                                                  onClick={() => {
                                                      this.props.showAuthLoader ();
                                                      this.props.userGithubSignIn ();
                                                  }}>
                                                <i className="zmdi zmdi-github zmdi-hc-lg" />
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>

                {
                    loader &&
                    <div className="loader-view">
                        <CircularProgress />
                    </div>
                }
                {showMessage && NotificationManager.error (alertMessage)}
                <NotificationContainer />
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    const { loader, alertMessage, showMessage, authUser } = auth;
    return { loader, alertMessage, showMessage, authUser }
};

export default connect (mapStateToProps, {
    userSignUp,
    hideMessage,
    showAuthLoader,
    userFacebookSignIn,
    userGoogleSignIn,
    userGithubSignIn,
    userTwitterSignIn
}) (SignUp);
