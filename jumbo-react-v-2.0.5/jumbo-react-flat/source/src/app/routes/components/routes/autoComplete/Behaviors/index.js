import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from '../data'


class BasicBehaviorsExample extends React.Component {
    state = {
        disabled: false,
        dropup: false,
        flip: false,
        highlightOnlyResult: false,
        minLength: 0,
        selectHintOnEnter: false,
    };
    _handleChange = (e) => {
        const { checked, value } = e.target;
        console.log (checked, value);
        const newState = { [value]: checked };

        if (value === 'minLength') {
            newState.minLength = checked ? 2 : 0;
        }
        console.log ("newState", newState);
        this.setState (newState);
    }

    render () {
        const {
            disabled,
            dropup,
            emptyLabel,
            flip,
            highlightOnlyResult,
            minLength,
            selectHintOnEnter,
        } = this.state;

        console.log (
            disabled,
            dropup,
            emptyLabel,
            flip,
            highlightOnlyResult,
            minLength,
            selectHintOnEnter);

        const checkboxes = [
            /* eslint-disable max-len */
            { checked: disabled, children: 'Disable the input', name: 'Disabled', value: 'disabled' },
            { checked: dropup, children: 'Dropup menu', name: 'Dropup', value: 'dropup' },
            {
                checked: flip,
                children: 'Flip the menu position when it reaches the viewport bounds',
                name: 'Flip',
                value: 'flip'
            },
            {
                checked: ! ! minLength,
                children: 'Require minimum input before showing results (2 chars)',
                name: 'Min Length', value: 'minLength'
            },
            {
                checked: emptyLabel,
                children: 'Hide the menu when there are no results',
                name: 'Empty Label',
                value: 'emptyLabel'
            },
            {
                checked: selectHintOnEnter,
                children: 'Select the hinted result by pressing enter',
                name: 'Select Hint On Enter', value: 'selectHintOnEnter'
            },
            {
                checked: highlightOnlyResult,
                children: 'Highlight the only result',
                name: 'Highlight Only Result',
                value: 'highlightOnlyResult'
            },
            /* eslint-enable max-len */
        ];

        return (
            <div className="w-100">
                <Typeahead
                    {...this.state}
                    emptyLabel={emptyLabel ? '' : undefined}
                    labelKey="name"
                    options={options}
                    placeholder="Choose a state..."
                />


                {checkboxes.map ((props) => (
                    <div key={props.value} className="form-checkbox form-checkbox-custom mt-3">
                        <input type="checkbox"
                               name={props.name}
                               value={props.value}
                               onChange={this._handleChange}

                        />
                        <span className="check">
                            <i className="zmdi zmdi-check zmdi-hc-lg" />
                        </span>
                        <label>{props.name}</label>

                    </div>))}

            </div>
        );
    }
}

export default BasicBehaviorsExample;