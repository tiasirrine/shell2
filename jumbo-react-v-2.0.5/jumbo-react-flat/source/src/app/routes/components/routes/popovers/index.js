import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'

import Simple from './simple/index';
import PopoversList from './list/index';
import IntlMessages from 'util/IntlMessages';

const Popovers = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.popovers"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox childrenStyle="text-center" heading={<IntlMessages id="component.breadcrumbs.noList"/>}>
                    <PopoversList/>
                </CardBox>

                <CardBox childrenStyle="text-center" heading={<IntlMessages id="component.breadcrumbs.simple"/>}>
                    <Simple/>
                </CardBox>
            </div>
        </div>
    );
};
export default Popovers;