import React from 'react';
import {Link} from 'react-router-dom'
import {Form, FormGroup, Input} from 'reactstrap';

import IntlMessages from 'util/IntlMessages';


const Login = () => {

    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content">
                <div className="login-header mb-4">
                    <Link className="app-logo" to="/" title="Jambo">
                        <img src="http://via.placeholder.com/105x36" alt="jambo" title="jambo"/>
                    </Link>
                </div>

                <div className="login-form">
                    <Form>
                        <FormGroup className="mb-4">
                            <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
                        </FormGroup>
                        <FormGroup className="mb-4">
                            <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                        </FormGroup>
                        <div className="mt-1 mb-2 d-flex justify-content-between align-items-center">

                            <div className="custom-control custom-checkbox d-flex align-items-center">
                                <input type="checkbox" className="custom-control-input pointer" id="customCheck1"/>
                                <label className="custom-control-label" htmlFor="customCheck1">
                                    <IntlMessages id="appModule.rememberMe"/>
                                </label>
                            </div>


                            <Link to="/app/app-module/forgot-password" title="Reset Password">
                                <IntlMessages id="appModule.forgotPassword"/>
                            </Link>
                        </div>

                        <Link className="btn btn-primary" to="/">
                            <IntlMessages id="appModule.signIn"/>
                        </Link>
                    </Form>
                </div>
            </div>
        </div>
    );

}

export default Login;
