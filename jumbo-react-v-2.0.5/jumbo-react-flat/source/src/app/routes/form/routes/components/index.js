import React from 'react';

import ContainerHeader from 'components/ContainerHeader/index';
import CardBox from 'components/CardBox/index';
import TextFields from '../../../components/routes/textFields/textField/TextFields';
import SimpleSelect from '../../../components/routes/selects/simple/SimpleSelect';
import NativeSelect from '../../../components/routes/selects/native/NativeSelect';
import MultipleSelect from '../../../components/routes/selects/multi/MultipleSelect';
import DialogSelect from '../../../components/routes/selects/dialog/DialogSelect';
import DatePickers from '../../../components/routes/pickers/date/DatePickers';
import DateAndTimePickers from '../../../components/routes/pickers/dateTime/DateAndTimePickers';
import TimePickers from '../../../components/routes/pickers/time/TimePickers';
import CustomDateTimePicker from '../../../components/routes/pickers/customDateTimePicker/CustomDateTimePicker';
import WeekPicker from '../../../components/routes/pickers/weekPicker/WeekPicker';
import SimpleDialogDemo from '../../../components/routes/modals/simple/SimpleDialogDemo';
import AlertDialog from '../../../components/routes/modals/alerts/AlertModals';
import FormModals from '../../../components/routes/modals/formAlerts/FormModals';
import RadioButtons from '../../../components/routes/selection/radioButtons/RadioButtons'
import Checkboxes from '../../../components/routes/selection/checkboxes/Checkboxes'
import RadioButtonsGroup from '../../../components/routes/selection/radioButtons/RadioButtonsGroup'
import SimpleProgress from '../../../components/routes/progressbar/simple/SimpleProgress'
import IntlMessages from 'util/IntlMessages';

const Form = ({match}) => {
    return (

        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.forms.components"/>} match={match}/>

            <div className="row">
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.textFields.textfield"/>}>
                    <TextFields/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.selectionControl.checkboxes"/>}>
                    <Checkboxes/>
                </CardBox>

                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.selectionControl.basicRadio"/>}>
                    <RadioButtons/>
                </CardBox>
                <CardBox styleName="col-lg-12"
                         heading={<IntlMessages id="component.selectionControl.radioBtnGroup"/>}>
                    <RadioButtonsGroup/>
                </CardBox>
            </div>

            <div className="row">
                <CardBox styleName="col-6"
                         heading={<IntlMessages id="component.selects.simple"/>}>
                    <SimpleSelect/>
                </CardBox>
                <CardBox styleName="col-6"
                         heading={<IntlMessages id="component.selects.native"/>}>
                    <NativeSelect/>
                </CardBox>
                <CardBox styleName="col-6"
                         heading={<IntlMessages id="component.selects.multiple"/>}>
                    <MultipleSelect/>
                </CardBox>
                <CardBox styleName="col-6"
                         heading={<IntlMessages id="component.selects.dialog"/>}>
                    <DialogSelect/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox styleName="col-12"
                         heading={<IntlMessages id="component.progress.simpleProgress"/>}>
                    <SimpleProgress/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox styleName="col-4"
                         heading={<IntlMessages id="picker.date.basic"/>}>
                    <DatePickers/>
                </CardBox>

                <CardBox styleName="col-4"
                         heading={<IntlMessages id="picker.date.toggle"/>}>
                    <DateAndTimePickers/>
                </CardBox>

                <CardBox styleName="col-4"
                         heading={<IntlMessages id="picker.date.input"/>}>
                    <CustomDateTimePicker/>
                </CardBox>

                <CardBox styleName="col-6"
                         heading={<IntlMessages id="picker.date.selectDay"/>}>
                    <TimePickers/>
                </CardBox>

                <CardBox styleName="col-6"
                         heading={<IntlMessages id="picker.date.localization"/>}>
                    <WeekPicker/>
                </CardBox>
            </div>


            <div className="row">
                <CardBox styleName="col-4"
                         heading={<IntlMessages id="sidebar.components.alerts"/>}>
                    <AlertDialog/>
                </CardBox>

                <CardBox styleName="col-4"
                         heading="Simple Dialogs">
                    <SimpleDialogDemo/>
                </CardBox>

                <CardBox styleName="col-4"
                         heading="Form Dialog">
                    <FormModals/>
                </CardBox>

            </div>

        </div>

    );
};

export default Form;
