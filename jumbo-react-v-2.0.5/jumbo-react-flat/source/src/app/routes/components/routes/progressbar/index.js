import React from 'react';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import SimpleProgress from './simple/SimpleProgress';
import ColorVariants from './color/ColorVariants';
import LabelsProgress from './Labels/LabelsProgress';
import MultipleBarsProgress from './MultipleBars/MultipleBarsProgress';
import StripedProgress from './striped/StripedProgress';
import AnimatedProgress from './Animated/AnimatedProgress';

import IntlMessages from 'util/IntlMessages';


const Progress = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.progress"/>} match={match}/>

            <div className="row">

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.simpleProgress"/>}>
                    <SimpleProgress/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.colorVariants"/>}>
                    <ColorVariants/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.labelsProgress"/>}>
                    <LabelsProgress/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.multipleProgress"/>}>
                    <MultipleBarsProgress/>
                </CardBox>

                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.stripedProgress"/>}>
                    <StripedProgress/>
                </CardBox>
                <CardBox styleName="col-md-6 col-12" chldrenStyle=""
                         heading={<IntlMessages id="component.progress.animatedProgress"/>}>
                    <AnimatedProgress/>
                </CardBox>

            </div>
        </div>
    );
};

export default Progress;

