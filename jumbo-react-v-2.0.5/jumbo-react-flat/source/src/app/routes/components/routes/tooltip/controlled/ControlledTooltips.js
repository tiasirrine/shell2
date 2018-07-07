import React from 'react';
import {Tooltip} from 'reactstrap';

class ControlledTooltips extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    render() {
        return (
            <div>
            <span className="icon-btn" id="TooltipExample">
                <i className="zmdi zmdi-delete zmdi-hc-lg"/>
            </span>
                <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
                    Hello world!
                </Tooltip>
            </div>
        );
    }
}

export default ControlledTooltips;