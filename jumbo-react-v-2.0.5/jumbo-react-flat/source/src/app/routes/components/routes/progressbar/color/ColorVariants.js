import React from 'react';
import {Progress} from 'reactstrap';

function ColorVariants() {
    return (
        <div>
            <div className="mb-4"><Progress value={2 * 5}/></div>
            <div className="mb-4"><Progress color="success" value="25"/></div>
            <div className="mb-4"><Progress color="info" value={50}/></div>
            <div className="mb-4"><Progress color="warning" value={75}/></div>
            <div><Progress color="danger" value="100"/></div>
        </div>
    );
}


export default ColorVariants;