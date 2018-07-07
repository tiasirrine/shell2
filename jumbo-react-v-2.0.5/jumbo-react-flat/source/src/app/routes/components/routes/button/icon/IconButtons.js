import React from 'react';
import {Button} from 'reactstrap';

function IconButtons() {
    return (
        <div>
            <div className="jr-btn-group">
                <Button color="primary" className="jr-btn jr-btn-label left">
                    <i className="zmdi zmdi-headset zmdi-hc-fw "/>
                    <span>Labeled</span>
                </Button>

                <Button color="primary" className="jr-btn jr-btn-label right">
                    <i className="zmdi zmdi-camera zmdi-hc-fw "/>
                    <span>Camera</span>
                </Button>

                <Button color="primary" className="jr-btn">
                    <i className="zmdi zmdi-mic zmdi-hc-fw"/>
                    <span>Icon Button</span>
                </Button>
                <Button color="default" className="jr-flat-btn jr-btn">
                    <i className="zmdi zmdi-github zmdi-hc-fw"/>
                    <span>FLAT ICON BUTTON</span>
                </Button>
                <Button color="primary" className="jr-btn">
                    <i className="zmdi zmdi-mic zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-github zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-dropbox zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-mic zmdi-hc-fw"/>
                    <span>Icon Button</span>
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button color="default" className="jr-btn btn-light-green">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                    <span>Search</span>
                </Button>
                <Button color="default" className="jr-btn btn-deep-orange">
                    <i className="zmdi zmdi-shield-check zmdi-hc-fw"/>
                    <span>privacy</span>
                </Button>
                <Button color="default" className="jr-btn btn-amber">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw"/>
                    <span>Shopping Cart</span>
                </Button>
                <Button color="default" className="jr-btn btn-secondary">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                    <span>Spinner</span>
                </Button>
                <Button color="default" className="jr-btn btn-purple">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                    <span>Like</span>
                </Button>
                <Button color="default" className="jr-btn btn-teal">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                    <span>Notifications</span>
                </Button>
            </div>

            <div className="jr-btn-group">
                <Button color="default" className="jr-btn btn-light-green">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn btn-amber">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn btn-secondary">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn btn-purple">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn btn-teal">
                    <i className="zmdi zmdi-notifications-active"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-btn jr-btn-default">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                </Button>
            </div>
            <div className="jr-btn-group">
                <Button color="default" className="jr-fab-btn btn-light-green">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn btn-amber">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn btn-secondary">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn btn-purple">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn btn-teal">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                </Button>

                <Button color="default" className="jr-fab-btn jr-btn-default">
                    <i className="zmdi zmdi-search zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-default">
                    <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-default">
                    <i className="zmdi zmdi-spinner zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-default">
                    <i className="zmdi zmdi-thumb-up zmdi-hc-fw"/>
                </Button>
                <Button color="default" className="jr-fab-btn jr-btn-default">
                    <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
                </Button>
            </div>

        </div>
    );
}

export default (IconButtons);