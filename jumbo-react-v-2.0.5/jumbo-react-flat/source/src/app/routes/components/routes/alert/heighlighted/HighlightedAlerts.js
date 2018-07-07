import React from 'react';
import {Alert} from 'reactstrap';

const HighlightedAlerts = () => {
    return (
        <div className="row">
            <div className="col-lg-6 col-12">
                <h5>Default Alerts</h5>
                <Alert className="bg-white border text-black">
                    This is a default alert — check it out!
                </Alert>

                <h5>Primary Alerts</h5>
                <Alert className="bg-primary border-primary text-white">
                    This is a primary alert — check it out!
                </Alert>

                <h5>Secondary Alerts</h5>
                <Alert className="bg-secondary border-secondary text-white">
                    This is a secondary alert — check it out!
                </Alert>

                <h5>Success Alerts</h5>
                <Alert className="bg-success border-success text-white">
                    This is a success alert — check it out!
                </Alert>

                <h5>Danger Alerts</h5>
                <Alert className="bg-danger border-danger text-white">
                    This is a danger alert — check it out!
                </Alert>
            </div>
            <div className="col-lg-6 col-12">
                <h5>Warning Alerts</h5>
                <Alert className="bg-warning border-warning text-white">
                    This is a warning alert — check it out!
                </Alert>

                <h5>Info Alerts</h5>
                <Alert className="bg-info border-info text-white">
                    This is a info alert — check it out!
                </Alert>

                <h5>Light Alerts</h5>
                <Alert className="bg-light border-light text-black">
                    This is a light alert — check it out!
                </Alert>

                <h5>Dark Alerts</h5>
                <Alert className="bg-dark border-dark text-white">
                    This is a dark alert — check it out!
                </Alert>
            </div>
        </div>
    );
};

export default HighlightedAlerts;