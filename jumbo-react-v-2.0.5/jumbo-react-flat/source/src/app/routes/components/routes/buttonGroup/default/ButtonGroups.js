import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';

const ButtonGroups = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn jr-btn-default" color="default">Left</Button>{' '}
            <Button className="jr-btn jr-btn-default" color="default">Middle</Button>{' '}
            <Button className="jr-btn jr-btn-default" color="default">Right</Button>
        </ButtonGroup>
    );
};

export default ButtonGroups;