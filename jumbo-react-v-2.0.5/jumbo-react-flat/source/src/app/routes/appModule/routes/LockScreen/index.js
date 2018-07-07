import React from 'react';
import {FormGroup, Input} from 'reactstrap';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';

const LockScreen = () => {
    return (
        <div
            className="login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
            <div className="login-content text-center">
                <div className="login-header">
                    <Link className="app-logo" to="/app/app-module/login-2" title="Jambo">
                        <img src="http://via.placeholder.com/105x36" alt="jambo" title="jambo"/>
                    </Link>
                </div>

                <div className="login-avatar mb-4">
                    <img className="rounded-circle size-120" src="http://via.placeholder.com/150x150" alt="" title=""/>
                </div>
                <div className="mb-4">
                    <h3>John Smith</h3>
                    <p><IntlMessages id="appModule.enterPasswordUnlock"/></p>
                </div>
                <form method="get">
                    <FormGroup className="mt-0 mb-4">
                        <Input type="password" name="password" id="examplePassword" placeholder="Password"/>
                    </FormGroup>


                    <div className="mb-2">
                        <Link className="btn btn-primary"
                              to="/app/app-module/login">
                            <IntlMessages id="appModule.unlock"/>
                        </Link>
                    </div>
                </form>
                <div>
                    <Link className="right-arrow" to="/app/app-module/login"><IntlMessages
                        id="appModule.signInDiffAccount"/></Link>
                </div>
            </div>
        </div>
    );
};
export default LockScreen;
