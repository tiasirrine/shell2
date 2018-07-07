import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from '../data'


class BasicExample extends React.Component {
    state = {
        multiple: false,
    };

    render() {
        const {multiple} = this.state;
        return (
            <div className="w-100">
                <Typeahead
                    labelKey="name"
                    multiple={multiple}
                    options={options}
                    placeholder="Choose a state..."
                />
            </div>
        );
    }
}

export default BasicExample