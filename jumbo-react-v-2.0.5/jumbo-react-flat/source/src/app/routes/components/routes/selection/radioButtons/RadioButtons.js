import React from 'react';

class RadioButtons extends React.Component {
    state = {
        selectedValue: undefined,
    };

    handleChange = event => {
        this.setState({selectedValue: event.target.value});
    };

    render() {
        return (
            <div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio13" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="customRadio13">A</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio14" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="customRadio14">B</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio15" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="customRadio15">C</label>
                </div>

            </div>
        );
    }
}

export default RadioButtons;