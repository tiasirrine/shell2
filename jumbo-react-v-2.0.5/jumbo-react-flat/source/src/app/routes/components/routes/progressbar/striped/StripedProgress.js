import React from 'react';
import {Progress} from 'reactstrap';

function StripedProgress() {
    return (
        <div>
            <div className="mb-4"><Progress striped value={2 * 5}/></div>
            <div className="mb-4"><Progress striped color="success" value="25"/></div>
            <div className="mb-4"><Progress striped color="info" value={50}/></div>
            <div className="mb-4"><Progress striped color="warning" value={75}/></div>
            <div className="mb-4"><Progress striped color="danger" value="100"/></div>
            <div><Progress multi>
                <Progress striped bar value="10"/>
                <Progress striped bar color="success" value="30"/>
                <Progress striped bar color="warning" value="20"/>
                <Progress striped bar color="danger" value="20"/>
            </Progress>
            </div>

        </div>
    );
}


export default StripedProgress;