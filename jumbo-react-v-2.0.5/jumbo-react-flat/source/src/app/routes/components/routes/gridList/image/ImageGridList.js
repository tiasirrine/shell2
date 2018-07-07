import React from 'react';

import tileData from './tileData';

function ImageGridList() {
    return (
        <div className="gl-image">
            <div className="gl row no-gutters g-ul">
                {tileData.map((tile, index) =>
                    <div key={index} className={`col-${tile.cols ? 8 : 4}`} style={{height: 160}}>
                        <div className="grid">
                            <img src={tile.img} alt={tile.title}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ImageGridList;