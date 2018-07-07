import React from 'react';

class RadioButtonsDisabled extends React.Component {
    state = {
        selectedValue: undefined,
    };

    handleChange = event => {
        this.setState({selectedValue: event.target.value});
    };

    render() {
        return (
            <div>
                <p className="text-grey">Storage In Basic Plan</p>
                <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="disabledRadio1" name="customRadio" className="custom-control-input"
                           disabled/>
                    <label className="custom-control-label" htmlFor="disabledRadio1">1Gb</label>
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="disabledRadio2" name="customRadio" className="custom-control-input"
                           disabled/>
                    <label className="custom-control-label" htmlFor="disabledRadio2">2Gb</label>
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="disabledRadio3" name="customRadio" className="custom-control-input"
                           disabled/>
                    <label className="custom-control-label" htmlFor="disabledRadio3">3Gb</label>
                </div>
            </div>

        );
    }
}

export default RadioButtonsDisabled;