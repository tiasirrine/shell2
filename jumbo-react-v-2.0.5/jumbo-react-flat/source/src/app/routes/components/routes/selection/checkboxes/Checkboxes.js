import React, {Component} from 'react';


class Checkboxes extends Component {

    state = {
        checkedPizza: true,
        checkedBur: false,
        checkedDu: false,

    };

    handleChange = name => (event) => {
        const checked = event.target.checked;
        this.setState({[name]: checked});
    };

    render() {
        return (
            <form>
                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="pizzaCheckbox1"
                           checked={this.state.checkedPizza} onChange={this.handleChange('checkedPizza')}/>
                    <label className="custom-control-label" htmlFor="pizzaCheckbox1">Pizza</label>
                </div>

                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="burgerCheckbox1"
                           checked={this.state.checkedBur} onChange={this.handleChange('checkedBur')}/>
                    <label className="custom-control-label" htmlFor="burgerCheckbox1">Burger</label>
                </div>

                <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="duCheckbox1"
                           checked={this.state.checkedDu} onChange={this.handleChange('checkedDu')}/>
                    <label className="custom-control-label" htmlFor="duCheckbox1">Doughnut</label>
                </div>
            </form>
        );
    }
}

export default Checkboxes;
