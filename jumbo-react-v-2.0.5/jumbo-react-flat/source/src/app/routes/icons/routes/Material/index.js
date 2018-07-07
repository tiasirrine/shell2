import React from 'react';
import MaterialIcons from './MaterialIcons';
import ContainerHeader from 'components/ContainerHeader/index'
import IntlMessages from 'util/IntlMessages';

const Material = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="icon.material"/>} match={match}/>

            <MaterialIcons/>
        </div>
    );
};

export default Material;

