import React, {Component} from 'react';

class DisabledCheckboxes extends Component {
    state = {
        checkedA: true,
        checkedB: false,
        checkedC: false,

    };

    handleChange = name => (event) => {
        const checked = event.target.checked;
        this.setState({[name]: checked});
    };


    render() {
        return (
            <form>
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="selectedCheckbox"
                           checked={this.state.checkedA} onChange={this.handleChange('checkedA')} disabled/>
                    <label className="custom-control-label" htmlFor="selectedCheckbox">Selected Disabled</label>
                </div>

                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="unselectedCheckbox" disabled/>
                    <label className="custom-control-label" htmlFor="unselectedCheckbox">Unselected Disabled</label>
                </div>

                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="disabledCheckbox" value="checkedA"
                           disabled/>
                    <label className="custom-control-label" htmlFor="disabledCheckbox">Disabled</label>
                </div>
            </form>
        );
    }
}

export default DisabledCheckboxes;
