import React from 'react';
import DefaultSorting from './Components/DefaultSorting';
import CustomSorting from './Components/CustomSorting';
import EditableContent from './Components/EditableContent';
import CustomFilter from './Components/CustomFilter';
import CardBox from 'components/CardBox/index';
import IntlMessages from 'util/IntlMessages';

const EnhancedTables = () => {
    return (
        <div className="row animated slideInUpTiny animation-duration-3">
            <CardBox styleName="col-12" cardStyle="p-0 border-0" heading={<IntlMessages id="table.defaultSorting"/>}
                     headerOutside>
                <DefaultSorting/>
            </CardBox>

            <CardBox styleName="col-12" cardStyle="p-0 border-0" heading={<IntlMessages id="table.customSorting"/>}
                     headerOutside>
                <CustomSorting/>
            </CardBox>

            <CardBox styleName="col-12" cardStyle="p-0 border-0" heading={<IntlMessages id="table.editableContent"/>}
                     headerOutside>
                <EditableContent/>
            </CardBox>

            <CardBox styleName="col-12" cardStyle="p-0 border-0" heading={<IntlMessages id="table.customFilter"/>}
                     headerOutside>
                <CustomFilter/>
            </CardBox>
        </div>
    );
};

export default EnhancedTables;

