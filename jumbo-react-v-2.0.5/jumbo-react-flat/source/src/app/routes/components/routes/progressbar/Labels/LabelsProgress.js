import React from 'react';
import {Progress} from 'reactstrap';


function LabelsProgress() {
    return (

        <div>
            <div className="mb-4"><Progress value="25">25%</Progress></div>
            <div className="mb-4"><Progress value={50}>1/2</Progress></div>
            <div className="mb-4"><Progress value={75}>You're almost there!</Progress></div>
            <div className="mb-4"><Progress color="success" value="100">You did it!</Progress></div>
            <div><Progress multi>
                <Progress bar value="15">Meh</Progress>
                <Progress bar color="success" value="30">Wow!</Progress>
                <Progress bar color="info" value="25">Cool</Progress>
                <Progress bar color="warning" value="20">20%</Progress>
                <Progress bar color="danger" value="5">!!</Progress>
            </Progress>
            </div>
        </div>

    );
}


export default LabelsProgress;