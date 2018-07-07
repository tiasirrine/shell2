import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import Checkboxes from './checkboxes/Checkboxes';
import RadioButtonsGroup from './radioButtons/RadioButtonsGroup';
import DisabledCheckboxes from './disabled/DisabledCheckboxes';
import RadioButtonsDisabled from './radioButtons/RadioButtonsDisabled';
import ErrorMessage from './message/ErrorMessage';
import FormGroup from './formGroups/FormGroup';
import IntlMessages from 'util/IntlMessages';

const Selection = ({ match }) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.selectionControl" />} match={match} />

            <div className="row">
                <CardBox styleName="col-6" childrenStyle=""
                         heading={<IntlMessages id="component.selectionControl.checkboxes" />}>
                    <Checkboxes />
                </CardBox>
                <CardBox styleName="col-6" childrenStyle=""
                         heading={<IntlMessages id="component.selectionControl.disabled" />}>
                    <DisabledCheckboxes />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-12" heading={<IntlMessages
                    id="component.selectionControl.checkboxesWithForm" />}>
                    <div><IntlMessages
                        id="component.selectionControl.checkboxesWithFormTxt" />
                    </div>
                    <FormGroup />
                </CardBox>
            </div>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-6" heading={<IntlMessages
                    id="component.selectionControl.basicRadio" />}>
                    <div><IntlMessages
                        id="component.selectionControl.verticalInlineRadio" /></div>
                    <RadioButtonsGroup />
                </CardBox>

                <CardBox styleName="col-lg-3 col-sm-6" childrenStyle="d-flex flex-column"
                         heading={<IntlMessages
                             id="component.selectionControl.disabledRadio" />}>
                    <RadioButtonsDisabled />
                </CardBox>

                <CardBox styleName="col-lg-3 col-sm-6" childrenStyle="d-flex flex-column"
                         heading={<IntlMessages
                             id="component.selectionControl.withError" />}>
                    <ErrorMessage />
                </CardBox>
            </div>

        </div>
    );
};

export default (Selection);

