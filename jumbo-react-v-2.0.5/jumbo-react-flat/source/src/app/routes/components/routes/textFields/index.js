import React from 'react';
import TextFields from './textField/TextFields';

import CardBox from 'components/CardBox';
import ContainerHeader from 'components/ContainerHeader';
import IntlMessages from 'util/IntlMessages';

const TextField = ({match}) => {
    return (
        <div className="animated slideInUpTiny animation-duration-3">
            <ContainerHeader title={<IntlMessages id="sidebar.components.textFields"/>} match={match}/>

            <div className="row mb-md-4">
                <CardBox styleName="col-lg-12" heading={<IntlMessages id="component.textFields.textfield"/>}>
                    <TextFields/>
                </CardBox>
            </div>
        </div>
    );
};

export default TextField;

