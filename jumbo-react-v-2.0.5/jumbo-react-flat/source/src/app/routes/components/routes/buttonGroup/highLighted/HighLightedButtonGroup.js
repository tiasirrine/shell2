import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';

const HighLightedButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button color="default" className="jr-btn jr-btn-default">Left</Button>
            <Button color="default" className="jr-btn jr-btn-default active">Middle</Button>
            <Button color="default" className="jr-btn jr-btn-default">Right</Button>
        </ButtonGroup>
    );
};


export default HighLightedButtonGroup;