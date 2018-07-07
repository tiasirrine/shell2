import React from 'react';
import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';
import BasicExample from './Basic/index';
import SelectionsExample from './ControlSelections/index';
import BasicBehaviorsExample from './Behaviors/index';
import InputSizeExample from './InputSize/index';
import MenuAlignExample from './MenuAlignment/index';


const AutoComplete = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.autocomplete"/>} match={match}/>
            <div className="row mb-lg-4">
                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.Basic"/>}>
                    <BasicExample/>
                </CardBox>

                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.controlinSelection"/>}>
                    <SelectionsExample/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-lg-12" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.Behaviors"/>}>
                    <BasicBehaviorsExample/>
                </CardBox>
            </div>

            <div className="row mb-lg-4">
                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.inputSize"/>}>
                    <InputSizeExample/>
                </CardBox>

                <CardBox styleName="col-lg-6" childrenStyle="d-flex justify-content-center"
                         heading={<IntlMessages id="component.autocomplete.menuAlign"/>}>
                    <MenuAlignExample/>
                </CardBox>
            </div>

        </div>
    );
};

export default AutoComplete;
