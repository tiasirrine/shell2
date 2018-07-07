import React from 'react';
import BasicTabs from './basic/BasicTabs';
import IconTabs from './icon/IconTabs';
import IconLabelTabs from './icon/IconLabelTabs';
import DisabledTabs from './disabled/DisabledTabs';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const Tabs = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.tabs"/>} match={match}/>

            <div className="row">
                <CardBox heading={<IntlMessages id="component.tabs.basic"/>}>
                    <BasicTabs/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.tabs.icon"/>}>
                    <IconTabs/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox heading={<IntlMessages id="component.tabs.iconWithLabel"/>}>
                    <IconLabelTabs/>
                </CardBox>
                <CardBox heading={<IntlMessages id="component.tabs.disabled"/>}>
                    <DisabledTabs/>
                </CardBox>
            </div>


        </div>

    );
};

export default (Tabs);