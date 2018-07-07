import React from 'react';
import timeLineData from '../timeLineData';
import WithIconTimeLineItem from 'components/timeline/WithIconTimeLineItem';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const DefaultWithIcon = ({match}) => {
    return (
        <div>
            <ContainerHeader title={<IntlMessages id="sidebar.timeLine.defaultwithIcons"/>} match={match}/>
            <div className="timeline-section timeline-center clearfix animated slideInUpTiny animation-duration-3">
                <WithIconTimeLineItem timeLine={timeLineData[1]} color="pink">
                    <span className="d-block text-white"><i className="zmdi zmdi-android"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem styleName="timeline-inverted" timeLine={timeLineData[1]} color="purple">
                    <span className="d-block text-white"><i className="zmdi zmdi-apple"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem timeLine={timeLineData[2]} color="green">
                    <span className="d-block text-white"><i className="zmdi zmdi-codepen"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem styleName="timeline-inverted" timeLine={timeLineData[3]} color="red">
                    <span className="d-block text-white"> <i className="zmdi zmdi-google"/></span>
                </WithIconTimeLineItem>
                <WithIconTimeLineItem timeLine={timeLineData[4]} color="amber">
                    <span className="d-block text-white"> <i className="zmdi zmdi-instagram"/></span>
                </WithIconTimeLineItem>
            </div>
        </div>
    )
};

export default DefaultWithIcon;

