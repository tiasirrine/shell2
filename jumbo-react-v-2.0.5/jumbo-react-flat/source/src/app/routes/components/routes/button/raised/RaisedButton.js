import React from 'react';
import {Button} from 'reactstrap';

const RaisedButtons = () => {
    return (
        <div className="jr-btn-group">
            <Button color="default" className="jr-btn jr-btn-default">Default</Button>
            <Button color="default" className="jr-btn btn-primary">Primary</Button>
            <Button color="default" className="jr-btn btn-secondary">Secondary</Button>
            <Button color="default" className="jr-btn btn-primary disabled" disabled>Disabled</Button>

        </div>
    );
};

export default RaisedButtons;