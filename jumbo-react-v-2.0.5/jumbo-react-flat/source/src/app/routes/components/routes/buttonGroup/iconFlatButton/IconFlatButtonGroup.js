import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';


const IconFlatButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn jr-flat-btn" color="default">
                <i className="zmdi zmdi-shopping-basket zmdi-hc-fw "/>
            </Button>
            <Button className="jr-btn jr-flat-btn active" color="default">
                <i className="zmdi zmdi-shield-check zmdi-hc-fw"/>
            </Button>
            <Button className="jr-btn jr-flat-btn" color="default">
                <i className="zmdi zmdi-notifications-active zmdi-hc-fw"/>
            </Button>
        </ButtonGroup>
    );
};

export default IconFlatButtonGroup;