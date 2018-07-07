import React from 'react';

import tileData from './tileData';


function TitlebarGridList() {
    return (
        <div className="gl-list">
            <div className="gl row no-gutters g-ul">


                {tileData.map((tile, index) =>
                    <dev className="col-6" key={index}>
                        <div className="grid-thumb">
                            <img className="" src={tile.img} alt={tile.title}/>
                        </div>

                        <div className="title-gradient-bottom d-flex">
                            <div>
                                <h3 className="gradient-text mb-1">{tile.title}</h3>

                            </div>

                            <div className="ml-auto">
                                <i className="zmdi zmdi-star-outline zmdi-hc-2x text-white"/>
                            </div>
                        </div>
                    </dev>,
                )}
            </div>
        </div>
    );
}

export default TitlebarGridList;