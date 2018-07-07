import React from 'react';


const SimpleAppBar = () => {
    return (
        <div className="app-main-header">
            <div className="d-flex app-toolbar align-items-center">
                <span className="icon-btn jr-menu-icon">
                    <span className="menu-icon bg-grey"/>
                </span>
                <h4 className="mb-0">Company Name</h4>
            </div>
        </div>
    );
};


export default SimpleAppBar;