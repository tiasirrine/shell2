import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';

const IconButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button color="default" className="jr-btn jr-btn-default">
                <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
            </Button>
            <Button color="default" className="jr-btn jr-btn-default active">
                <i className="zmdi zmdi-shield-check zmdi-hc-fw "/>
            </Button>
            <Button color="default" className="jr-btn jr-btn-default">
                <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
            </Button>
        </ButtonGroup>
    );
};

export default IconButtonGroup;