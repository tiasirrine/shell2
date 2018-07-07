import React from 'react';
import {Button} from 'reactstrap';

function DifferentSizesButtons() {
    return (
        <div>
            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button color="primary" className="jr-btn jr-btn-lg">
                    primary
                </Button>
                <Button color="primary" className="jr-btn">
                    primary
                </Button>
                <Button color="primary" className="jr-btn jr-btn-sm">
                    primary
                </Button>
                <Button color="primary" className="jr-btn jr-btn-xs">
                    primary
                </Button>
            </div>

            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button className="jr-fab-btn jr-btn-fab-lg">
                    <i className="zmdi zmdi-notifications zmdi-hc-lg"/>
                </Button>
                <Button className="jr-fab-btn bg-secondary">
                    <i className="zmdi zmdi-notifications zmdi-hc-lg"/>
                </Button>
                <Button className="jr-fab-btn bg-secondary jr-btn-fab-sm">
                    <i className="zmdi zmdi-refresh-sync"/>
                </Button>
                <Button className="jr-fab-btn bg-secondary text-white jr-btn-fab-xs mb-3">
                    <i className="zmdi zmdi-cloud-done"/>
                </Button>
            </div>

            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button color="warning" className="jr-btn jr-btn-lg text-white">
                    <i className="zmdi zmdi-shopping-basket"/>
                </Button>
                <Button color="warning" className="jr-btn jr-btn-amber text-white">
                    <i className="zmdi zmdi-shopping-basket"/>
                </Button>
                <Button color="warning" className="jr-btn jr-btn-sm text-white">
                    <i className="zmdi zmdi-shopping-basket"/>
                </Button>
                <Button color="warning" className="jr-btn jr-btn-xs text-white">
                    <i className="zmdi zmdi-shopping-basket"/>
                </Button>
            </div>

            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button color="default" className="jr-btn jr-btn-lg jr-flat-btn jr-btn-primary">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-flat-btn jr-btn-primary">
                    <i className="zmdi zmdi-github zmdi-hc-lg"/>
                </Button>
                <Button color="default" className="jr-btn jr-flat-btn jr-btn-primary jr-btn-sm">
                    <i className="zmdi zmdi-github"/>
                </Button>
                <Button color="default" className="jr-btn jr-flat-btn jr-btn-primary jr-btn-xs">
                    <i className="zmdi zmdi-github"/>
                </Button>
            </div>

            <div className="jr-btn-group d-flex align-items-center flex-wrap">
                <Button color="default"
                        className="jr-btn jr-flat-btn jr-btn-lg">
                    large
                </Button>
                <Button color="default" className="jr-btn jr-flat-btn">
                    default
                </Button>
                <Button color="default"
                        className="jr-btn jr-flat-btn jr-btn-sm">
                    small
                </Button>
                <Button color="default"
                        className="jr-btn jr-flat-btn jr-btn-xs">
                    extra small
                </Button>
            </div>
        </div>
    );
}

export default DifferentSizesButtons;