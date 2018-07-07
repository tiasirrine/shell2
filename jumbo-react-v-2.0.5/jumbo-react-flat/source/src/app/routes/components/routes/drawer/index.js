import React from 'react';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import Basic from './Basic/index';
import Custom from './Custom/index';

const Drawer = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.drawer"/>} match={match}/>

            <div className="row mb-md-4">
                <Basic/>
            </div>

            <div className="row mb-md-4">
                <Custom/>
            </div>

        </div>
    );
};

export default (Drawer);

