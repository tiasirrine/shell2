import React from 'react';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from '../data'


class MenuAlignExample extends React.Component {
    state = {
        align: 'justify',
    };

    render() {
        const {align} = this.state;
        const radios = [
            {label: 'Justify (default)', value: 'justify'},
            {label: 'Align left', value: 'left'},
            {label: 'Align right', value: 'right'},
        ];

        return (
            <div className="w-100">
                <Typeahead
                    align={align}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />

                {radios.map(({label, value}) => (
                    <div key={value} className="form-checkbox form-checkbox-custom mt-3">
                        <input type="checkbox"
                               value="SelectTodo"
                               checked={align === value}
                               onChange={(e) => this.setState({align: value})}
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

export default MenuAlignExample;