import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import asyncComponent from '../../../util/asyncComponent';

const AppModule = ({match}) => (
    <div className="app-wrapper h-100">
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/login-1`}/>
            <Route path={`${match.url}/login`} component={asyncComponent(() => import('./routes/Login/'))}/>
            <Route path={`${match.url}/sign-up`} component={asyncComponent(() => import('./routes/SignUp/'))}/>
            <Route path={`${match.url}/forgot-password`}
                   component={asyncComponent(() => import('./routes/ForgotPassword/'))}/>
            <Route path={`${match.url}/lock-screen`}
                   component={asyncComponent(() => import('./routes/LockScreen/'))}/>
            <Route
                component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>
        </Switch>
    </div>
);

export default AppModule;
