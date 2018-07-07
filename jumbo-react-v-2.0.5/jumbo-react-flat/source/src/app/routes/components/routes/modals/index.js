import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader'
import SimpleModal from './simple/SimpleDialogDemo';
import FormModals from './formAlerts/FormModals';
import TimeoutModals from "./timeouts/TimeoutModals";
import ListDialog from "./list/ListDialog";
import NestedModal from "./nested/NestedModals"
import AlertModals from "./alerts/AlertModals";
import IntlMessages from 'util/IntlMessages';

const Dialogs = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.modals"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="py-sm-5">
                    <AlertModals/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="py-sm-5">
                    <TimeoutModals/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="py-sm-5">
                    <FormModals/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="py-sm-5">
                    <SimpleModal/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="py-sm-5">
                    <NestedModal/>
                </CardBox>
                <CardBox styleName="col-lg-4 col-sm-6" cardStyle="py-sm-5">
                    <ListDialog/>
                </CardBox>
            </div>


        </div>
    );
};

export default Dialogs;

