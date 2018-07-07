import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from '../data'


class InputSizeExample extends React.Component {
    state = {
        bsSize: undefined,
    };

    render() {
        const {bsSize} = this.state;
        const radios = [
            {label: 'Small', value: 'small'},
            {label: 'Default', value: undefined},
            {label: 'Large', value: 'large'},
        ];

        return (
            <div className="w-100">
                <Typeahead
                    bsSize={bsSize}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />

                {radios.map(({label, value}, index) => (
                    <div key={index} className="form-checkbox form-checkbox-custom mt-3">
                        <input type="checkbox"
                               value="SelectTodo"
                               checked={bsSize === value}
                               onChange={(e) => this.setState({bsSize: value})}
                        />

                        <span className="check">
                        <i className="zmdi zmdi-check zmdi-hc-lg"/>
                    </span>
                        <label>{label}</label>

                    </div>))}
            </div>
        );
    }
}

export default InputSizeExample;