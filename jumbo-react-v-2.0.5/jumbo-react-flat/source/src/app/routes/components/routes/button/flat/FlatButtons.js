import React from 'react';
import {Button} from 'reactstrap';

const FlatButtons = () => {
    return (
        <div>
            <div className="jr-btn-group">
                <Button color="default" className="jr-btn jr-flat-btn">Default</Button>
                <Button color="default" className="jr-btn jr-flat-btn jr-btn-primary">Primary</Button>
                <Button color="default" className="jr-btn jr-flat-btn jr-btn-secondary">Secondary</Button>
                <Button color="default" className="jr-btn disabled" disabled>Disabled</Button>
            </div>

            <div className="jr-btn-group">
                <Button className="jr-btn jr-flat-btn" color="default">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                    <span>ICON BUTTON</span>
                </Button>
                <Button className="jr-btn jr-flat-btn jr-btn-primary" color="default">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                    <span>ICON BUTTON</span>
                </Button>
                <Button className="jr-btn jr-flat-btn jr-btn-secondary" color="default">
                    <span>ICON RIGHT BUTTON</span>
                    <i className="zmdi zmdi-github"/>
                </Button>
                <Button className="jr-btn jr-flat-btn jr-btn-primary" color="default">
                    <i className="zmdi zmdi-github"/>
                </Button>
            </div>

            <div>
                <Button color="primary" className="jr-btn jr-btn-primary text-uppercase btn-block">Full
                    Width
                    Primary</Button>
                <Button color="default" className="jr-btn jr-btn-secondary text-uppercase btn-block">Full Width
                    large button</Button>
                <Button color="default" className="jr-btn jr-btn-default text-uppercase btn-block">Full Width
                    default button</Button>
                <Button className="jr-btn jr-flat-btn text-uppercase btn-block" color="default">Full Width default
                    button</Button>
            </div>
        </div>
    );
};

export default FlatButtons;