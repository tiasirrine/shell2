import React from 'react';


function IconAvatars() {
    return (
        <div className="manage-margin d-flex align-items-center justify-content-around flex-wrap">
            <span className="user-avatar border-0 bg-warning size-100">
                <i className="zmdi zmdi-shopping-cart zmdi-hc-2x text-white"/>
            </span>

            <span className="user-avatar border-0 bg-dark size-80">
                <i className="zmdi zmdi-format-paint zmdi-hc-lg text-white"/>
            </span>

            <span className="user-avatar border-0 bg-primary size-60">
                <i className="zmdi zmdi-seat text-white"/>
            </span>

            <span className="user-avatar border-0 bg-secondary size-40">
                <i className="zmdi zmdi-sun text-white"/>
            </span>

            <span className="user-avatar border-0 bg-black size-30">
                <i className="zmdi zmdi-truck text-white"/>
            </span>

            <span className="user-avatar border-0 bg-primary size-40">
                <i className="zmdi zmdi-cloud-done text-white"/>
            </span>

            <span className="user-avatar border-0 bg-success size-60">
                <i className="zmdi zmdi-run text-white"/>
            </span>

            <span className="user-avatar border-0 bg-info size-80">
                <i className="zmdi zmdi-face zmdi-hc-lg text-white"/>
            </span>

            <span className="user-avatar border-0 bg-danger size-100">
                <i className="zmdi zmdi-shield-security zmdi-hc-2x text-white"/>
            </span>

        </div>
    );
}

export default IconAvatars;