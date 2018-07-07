import React from 'react';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

const ForgotPassword = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content">
                <div className="login-header">
                    <Link className="app-logo" to="/" title="Jambo">
                        <img src="http://via.placeholder.com/105x36" alt="jambo" title="jambo"/>
                    </Link>
                </div>

                <div className="mb-2">
                    <h2><IntlMessages id="appModule.forgotPassword"/></h2>
                </div>

                <div className="login-form">
                    <form method="post" action="/">
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="mt-0 mb-4 form-control form-control-lg"
                        />

                        <p className="mb-3">
                            <IntlMessages id="appModule.dntRememberEmail"/> &nbsp;
                            <a className="small" href="javascript:void(0)">
                                <IntlMessages id="appModule.contactSupport"/>
                            </a>
                        </p>

                        <Link className="btn btn-primary" to="/app/dashboard/default">
                            <IntlMessages id="appModule.resetPassword"/>
                        </Link>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;

