import React from 'react';

function LetterAvatars() {
    return (
        <div className="manage-margin d-flex align-items-center flex-wrap">
            <span className="user-avatar border-0 rounded-circle bg-primary size-100">
                <h1 className="m-0 text-white">DK</h1>
            </span>

            <span className="user-avatar bg-secondary border-0 size-80">M</span>

            <span className="user-avatar bg-success size-60 border-0 text-white">G</span>

            <span className="user-avatar border-0 bg-warning"><h3 className="m-0 text-white">R</h3></span>

            <span className="user-avatar border-0 bg-info size-30"><h3 className="m-0 text-white">s</h3></span>
        </div>
    );
}

export default (LetterAvatars);