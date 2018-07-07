import React from 'react';

import ButtonList from '../Component/ButtonList';

function ListItem({styleName, data}) {
    const {image, name, description, buttonList} = data;
    console.log(buttonList)
    return (
        <div className={`user-list d-flex flex-row  ${styleName}`}>
            <img
                alt='avatar'
                src={image}
                className="size-60 user-avatar border-0"
            />

            <div className="description">
                <h3>{name}</h3>
                <p className="text-muted">{description}</p>

                {buttonList.map((bData, index) => (
                    <ButtonList key={index} data={bData}
                                className="list-inline d-sm-flex flex-sm-row gx-btn-list badge-list"/>
                ))}
            </div>

        </div>
    );
}

export default ListItem;