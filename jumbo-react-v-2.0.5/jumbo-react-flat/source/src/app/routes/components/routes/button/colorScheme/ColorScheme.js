import React from 'react';
import {Button} from 'reactstrap';

const ColorScheme = () => {
    return (
        <div>
            <div className="jr-btn-group mb-3 mb-md-5">
                <Button color="default" className="jr-btn btn-white">Default</Button>
                <Button color="primary" className="jr-btn">Primary</Button>
                <Button color="secondary" className="jr-btn">Secondary</Button>
                <Button color="warning" className="jr-btn bg-warning">Warning</Button>
                <Button color="info" className="jr-btn bg-info">Info</Button>
                <Button color="success" className="jr-btn bg-success">Success</Button>
                <Button color="danger" className="jr-btn bg-danger">Danger</Button>
            </div>
            <h4 className="sub-heading"> Optional Material Design Colors</h4>
            <div className="jr-btn-group">
                <Button color="default" className="jr-btn btn-cyan">Cyan</Button>
                <Button color="default" className="jr-btn btn-teal">Teal</Button>
                <Button color="default" className="jr-btn btn-amber">Amber</Button>
                <Button color="default" className="jr-btn btn-orange">Orange</Button>
                <Button color="default" className="jr-btn btn-deep-orange">Deep Orange</Button>
                <Button color="default" className="jr-btn btn-red">Red</Button>
                <Button color="default" className="jr-btn btn-pink">Pink</Button>
                <Button color="default" className="jr-btn btn-light-blue">Light Blue</Button>
                <Button color="default" className="jr-btn btn-blue">Blue</Button>
                <Button color="default" className="jr-btn btn-indigo">Indigo</Button>
                <Button color="default" className="jr-btn btn-lime">Lime</Button>
                <Button color="default" className="jr-btn btn-light-green">Light Green</Button>
                <Button color="default" className="jr-btn btn-purple">Purple</Button>
                <Button color="default" className="jr-btn btn-deep-purple">Deep Purple</Button>
                <Button color="default" className="jr-btn btn-green">Green</Button>
                <Button color="default" className="jr-btn btn-grey">Grey</Button>
                <Button color="default" className="jr-btn btn-blue-grey">Blue Grey</Button>
            </div>
        </div>
    );
};

export default ColorScheme;