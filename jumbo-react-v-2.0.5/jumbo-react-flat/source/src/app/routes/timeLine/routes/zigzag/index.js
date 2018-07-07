import React from 'react';
import timeLineData from '../timeLineData';
import ZigzagTimeLineItem from 'components/timeline/ZigzagTimeLineItem';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const Zigzag = ({match}) => {
    return (
        <div>
            <ContainerHeader title={<IntlMessages id="sidebar.timeLine.zigzag"/>} match={match}/>
            <div
                className="timeline-section timeline-center timeline-zigzag clearfix animated slideInUpTiny animation-duration-3">
                <ZigzagTimeLineItem timeLine={timeLineData[1]} color="pink"/>)
                <ZigzagTimeLineItem timeLine={timeLineData[2]} color="purple"/>)
                <ZigzagTimeLineItem timeLine={timeLineData[3]} color="green"/>)
                <ZigzagTimeLineItem timeLine={timeLineData[4]} color="red"/>)
                <ZigzagTimeLineItem timeLine={timeLineData[5]} color="amber"/>)

            </div>
        </div>
    )
};

export default Zigzag;

