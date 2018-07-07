import React from 'react';
import {Progress} from 'reactstrap';


function AnimatedProgress() {
    return (
        <div>
            <div className="mb-4"><Progress animated value={2 * 5}/></div>
            <div className="mb-4"><Progress animated color="success" value="25"/></div>
            <div className="mb-4"><Progress animated color="info" value={50}/></div>
            <div className="mb-4"><Progress animated color="warning" value={50}/></div>
            <div className="mb-4"><Progress animated color="danger" value="100"/></div>

            <div className="mb-4">
                <Progress multi>
                <Progress animated bar value="10" />
                <Progress animated bar color="success" value="30" />
                <Progress animated bar color="warning" value="20" />
                <Progress animated bar color="danger" value="20" />
                </Progress>
            </div>
        </div>
    );
}


export default AnimatedProgress;