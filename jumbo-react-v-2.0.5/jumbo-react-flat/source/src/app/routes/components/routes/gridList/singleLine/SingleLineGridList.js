import React from 'react';
import tileData from './tileData';


function SingleLineGridList() {
    return (
        <div className="gl-single-line">
            <div className="slg row g-ul">
                {tileData.map((tile, index) =>
                    <div key={index}>
                        <div className="grid" style={{height: 200, marginRight: 10}}>
                            <img src={tile.img} alt={tile.title}/>
                            <div className="title-gradient-bottom">
                                <div className="gradient-text">{tile.title}</div>
                                <div className="ml-auto">
                                    <i className="zmdi zmdi-star-outline zmdi-hc-2x text-white"/>
                                </div>
                            </div>
                        </div>
                    </div>,
                )}
            </div>
        </div>
    );
}

export default SingleLineGridList;