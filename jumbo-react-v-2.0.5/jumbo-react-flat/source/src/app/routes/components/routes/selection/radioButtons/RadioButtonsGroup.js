import React, {Component} from 'react';

class RadioButtonsGroup extends Component {
    state = {
        value: '',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {

        return (
            <div className="row">
                <div className="col-sm-4">
                    <div>
                        <h4>Gender</h4>
                        <div className="custom-control custom-radio mb-2">
                            <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio1">Male</label>
                        </div>
                        <div className="custom-control custom-radio mb-2">
                            <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio2">Female</label>
                        </div>
                        <div className="custom-control custom-radio mb-2">
                            <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio3">Other</label>
                        </div>

                    </div>

                </div>

                <div className="col-sm-8">
                    <h4>Gender</h4>
                    <div className="d-flex row">
                        <div className="custom-control custom-radio mr-4">
                            <input type="radio" id="customRadio4" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio4">Male</label>
                        </div>
                        <div className="custom-control custom-radio mr-4">
                            <input type="radio" id="customRadio5" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio5">Female</label>
                        </div>
                        <div className="custom-control custom-radio mr-4">
                            <input type="radio" id="customRadio6" name="customRadio" className="custom-control-input"/>
                            <label className="custom-control-label" htmlFor="customRadio6">Other</label>
                        </div>
                    </div>
                </div>

            </div>


        );
    }
}

export default RadioButtonsGroup;