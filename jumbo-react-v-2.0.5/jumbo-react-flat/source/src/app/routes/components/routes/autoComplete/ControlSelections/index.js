import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from '../data'

const SelectionsExample = (props) => (
    <div className="w-100">
        <Typeahead
            clearButton
            defaultSelected={options.slice(0, 5)}
            labelKey="name"
            multiple
            options={options}
            placeholder="Choose a state..."
        />
    </div>
);

export default SelectionsExample;