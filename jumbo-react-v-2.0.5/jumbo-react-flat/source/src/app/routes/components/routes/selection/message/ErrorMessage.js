import React, {Component} from 'react';

class ErrorMessage extends Component {
    state = {
        value: '',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };


    render() {
        return (
            <div>
                <p className="text-grey">Storage In Basic Plan</p>
                <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="radio11" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="radio11">1Gb</label>
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="radio12" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="radio12">5Gb</label>
                </div>
                <div className="custom-control custom-radio mb-3">
                    <input type="radio" id="radio13" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="radio13">50Gb</label>
                </div>
                <p className="text-danger">Your error message goes here.</p>
            </div>

        );
    }
}

export default ErrorMessage;
