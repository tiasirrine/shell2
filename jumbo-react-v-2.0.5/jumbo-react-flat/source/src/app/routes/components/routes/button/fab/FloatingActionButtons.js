import React from 'react';
import {Button} from 'reactstrap';

const FloatingActionButtons = () => {
    return (
        <div className="manage-margin d-flex flex-wrap">
            <Button color="primary" className="jr-fab-btn">
                <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
            </Button>

            <Button className="jr-fab-btn text-white bg-secondary">
                <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
            </Button>
            <Button color="default" className="jr-fab-btn" disabled>
                <i className="zmdi zmdi-account-add zmdi-hc-fw zmdi-hc-lg"/>
            </Button>
        </div>
    );
};

export default FloatingActionButtons;