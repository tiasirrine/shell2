import React from 'react';
import {Button, ButtonGroup} from 'reactstrap';

const FlatButtonGroup = ({isVertical}) => {
    return (
        <ButtonGroup vertical={isVertical}>
            <Button className="jr-btn jr-flat-btn" color="default">Left</Button>{' '}
            <Button className="jr-btn jr-flat-btn active" color="default">Middle</Button>{' '}
            <Button className="jr-btn jr-flat-btn" color="default">Right</Button>
        </ButtonGroup>
    );
};

export default FlatButtonGroup;