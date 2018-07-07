import React from 'react';
import {NotificationContainer} from 'react-notifications';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';


const SignUP = () => {

    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <Link className="app-logo" to="/" title="Jambo">
                        <img src="http://via.placeholder.com/105x36" alt="jambo" title="jambo"/>
                    </Link>
                </div>

                <div className="mb-4">
                    <h2><IntlMessages id="appModule.createAccount"/></h2>
                </div>

                <div className="login-form">
                    <form method="post" action="/">

                        <div className="form-group mb-3">
                            <input type="text" placeholder="Name"
                                   className="form-control form-control-lg"/>
                        </div>

                        <div className="form-group mb-3">
                            <input type="text" placeholder="Email"
                                   className="form-control form-control-lg"/>
                        </div>
                        <div className="form-group mb-3">
                            <input type="password" placeholder="Password"
                                   className="form-control form-control-lg"/>
                        </div>

                        <div className="mb-3">
                            <Link className="btn btn-primary" to="/">
                                <IntlMessages id="appModule.regsiter"/>
                            </Link>
                        </div>
                        <p>
                            <IntlMessages id="appModule.hvAccount"/>
                            <Link to="/app/app-module/login-2" className="ml-1">
                                <IntlMessages id="appModule.signIn"/>
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
            <NotificationContainer/>
        </div>
    );
}

export default SignUP;
