import React from 'react';
import PlainListItem from '../Component/PlainListItem';
import {PlainListData} from '../data';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

function SimpleList({match}) {
    return (
        <div>
            <ContainerHeader title={<IntlMessages id="sidebar.customViews.plainListView"/>} match={match}/>
            <div className="animated slideInUpTiny animation-duration-3">
                {PlainListData.map((data, index) => (
                    <PlainListItem key={index} data={data} styleName="card-simple"/>
                ))}
            </div>
        </div>
    );
}

export default SimpleList;