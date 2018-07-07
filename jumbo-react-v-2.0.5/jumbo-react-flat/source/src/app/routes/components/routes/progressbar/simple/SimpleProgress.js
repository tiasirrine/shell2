import React from 'react';
import {Progress} from 'reactstrap';

function SimpleProgress() {
    return (
        <div className="w-100">
            <div className="text-center">0%</div>
            <Progress/>
            <div className="text-center mt-4">25%</div>
            <Progress value="25"/>
            <div className="text-center mt-4">50%</div>
            <Progress value={50}/>
            <div className="text-center mt-4">75%</div>
            <Progress value={75}/>
            <div className="text-center mt-4">100%</div>
            <Progress value="100"/>
            <div className="text-center mt-4">Multiple bars</div>
            <Progress multi>
                <Progress bar value="15"/>
                <Progress bar color="success" value="30"/>
                <Progress bar color="info" value="25"/>
                <Progress bar color="warning" value="20"/>
                <Progress bar color="danger" value="5"/>
            </Progress>
        </div>
    );
}


export default SimpleProgress;