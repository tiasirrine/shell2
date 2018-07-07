import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import SimpleSelect from './simple/SimpleSelect';
import NativeSelect from './native/NativeSelect';
import MultipleSelect from './multi/MultipleSelect';
import DialogSelect from './dialog/DialogSelect';
import DropdownSelect from './dropdown/DropdownSelect';
import IntlMessages from 'util/IntlMessages';

const Selects = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.selects"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-6"
                         heading={<IntlMessages id="component.selects.simple"/>}>
                    <SimpleSelect/>
                </CardBox>
                <CardBox styleName="col-6"
                         heading={<IntlMessages id="component.selects.native"/>}>
                    <NativeSelect/>
                </CardBox>
            </div>
            <div className="row">
                <CardBox styleName="col-12"
                         heading={<IntlMessages id="component.selects.multiple"/>}>
                    <MultipleSelect/>
                </CardBox>
            </div>
            <div className="row">
                <CardBox styleName="col-12"
                         heading={<IntlMessages id="component.selects.dialog"/>}>
                    <DialogSelect/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-12"
                         heading={<IntlMessages id="component.selects.select"/>}>
                    <DropdownSelect/>
                </CardBox>
            </div>

        </div>
    );
};

export default Selects;

