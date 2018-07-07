import React from 'react';
import {UncontrolledAlert} from 'reactstrap';

const AlertsWithIcons = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <h5>Default Alerts</h5>
                <UncontrolledAlert className="alert-addon-card bg-white text-black border overflow-hidden">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-case-play zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Default alert — check it out!</span>
                </UncontrolledAlert>

                <h5>Primary Alerts</h5>
                <UncontrolledAlert className="alert-addon-card bg-primary text-white overflow-hidden border-primary">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-case-play zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Primary alert — check it out!</span>
                </UncontrolledAlert>

                <h5>Secondary Alerts</h5>
                <UncontrolledAlert
                    className="alert-addon-card bg-secondary text-white overflow-hidden border-secondary">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-notifications zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Secondary alert — check it out!</span>
                </UncontrolledAlert>

                <h5>Success Alerts</h5>
                <UncontrolledAlert
                    className="alert-addon-card bg-success bg-success text-white overflow-hidden border-success">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-cloud-done zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Success alert — check it out!</span>
                </UncontrolledAlert>

                <h5>Danger Alerts</h5>
                <UncontrolledAlert
                    className="alert-addon-card bg-danger bg-danger text-white overflow-hidden border-danger">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-delete zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Danger alert — check it out!</span>
                </UncontrolledAlert>
            </div>
            <div className="col-lg-6 col-12">
                <h5>Warning Alerts</h5>
                <UncontrolledAlert
                    className="alert-addon-card bg-warning bg-warning text-white overflow-hidden border-warning">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-headset zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Warning alert — check it out!</span>
                </UncontrolledAlert>
                <h5>Info Alerts</h5>
                <UncontrolledAlert className="alert-addon-card bg-info bg-info text-white overflow-hidden border-info">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-info zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Info alert — check it out!</span>
                </UncontrolledAlert>
                <h5>Light Alerts</h5>
                <UncontrolledAlert
                    className="alert-addon-card bg-light bg-light text-black overflow-hidden border-light">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-shopping-basket zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Light alert — check it out!</span>
                </UncontrolledAlert>
                <h5>Dark Alerts</h5>
                <UncontrolledAlert className="alert-addon-card bg-dark bg-dark text-white overflow-hidden border-dark">
                    <span className="icon-addon alert-addon">
                        <i className="zmdi zmdi-wifi zmdi-hc-fw zmdi-hc-lg"/>
                    </span>

                    <span className="d-inline-block">This is a Dark alert — check it out!</span>
                </UncontrolledAlert>
            </div>
        </div>

    );
};

export default AlertsWithIcons;