import React from 'react';

function ButtonList({data}) {
    const {name} = data;
    return (
        <span className="badge badge-outline" href="javascript:void(0)">{name}</span>
    );
}

export default ButtonList;