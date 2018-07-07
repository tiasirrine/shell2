import React from 'react';
import tileData from './tileData';

class AdvancedGridList extends React.Component {

    render() {
        return (
            <div className="gl-advanced">
                <div className="gl row no-gutters g-ul">
                    {tileData.map((tile, index) =>
                        <div key={index} className={`col-${tile.featured ? 12 : 6}`}
                             style={tile.featured ? {height: 290} : {height: 148}}>
                            <div className="gl-advanced-grid h-100">
                                <img src={tile.img} alt={tile.title} className="w-100 h-100"/>
                                <div className="title-gradient-top">
                                    <div className="mr-2">
                                        <a className="text-white" href="javascript:void(0)"><i
                                            className="zmdi zmdi-star-outline zmdi-hc-2x"/></a>
                                    </div>
                                    <div className="gradient-text">{tile.title}</div>
                                </div>
                            </div>
                        </div>,
                    )}
                </div>
            </div>
        );
    }
}

export default AdvancedGridList;