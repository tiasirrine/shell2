import React from 'react';
import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import IntlMessages from 'util/IntlMessages';
import Simple from './Simple/index';
import Basic from './Basic/index';

const ExpansionPanel = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.expansionPanel"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent border-0 p-0"
                         heading={<IntlMessages id="component.expansionPanel.simple"/>}
                         headerOutside>
                    <Simple/>
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" cardStyle="bg-transparent border-0 p-0"
                         heading={<IntlMessages id="component.expansionPanel.nested"/>}
                         headerOutside>
                    <Basic/>
                </CardBox>
            </div>


        </div>
    );
};

export default ExpansionPanel;

