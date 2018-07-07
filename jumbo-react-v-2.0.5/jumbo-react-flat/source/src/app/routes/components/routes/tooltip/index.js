import React from 'react';
import ControlledTooltips from './controlled/ControlledTooltips';
import PositionedTooltips from './positional/PositionedTooltips';
import {Button, Tooltip} from 'reactstrap';
import CardBox from 'components/CardBox';
import IntlMessages from 'util/IntlMessages';

class Tooltips extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);
        this.toggle2 = this.toggle2.bind(this);

        this.state = {
            tooltipOpen: false,
            tooltip1: false,
            tooltip2: false
        };
    }

    toggle() {
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }

    toggle1() {
        this.setState({
            tooltip1: !this.state.tooltip1
        });
    }

    toggle2() {
        this.setState({
            tooltip2: !this.state.tooltip2
        });
    }

    render() {

        return (
            <div className="animated slideInUpTiny animation-duration-3">
                {/*<ContainerHeader title={<IntlMessages id="sidebar.components.tooltips"/>} match={this.props.match}/>*/}
                <div className="row">
                    <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                             childrenStyle="d-flex justify-content-center"
                             heading={<IntlMessages id="component.tooltips.avatar"/>}>

                        <span id="tooltip-icon">
                            <img className="size-60 user-avatar" alt="Remy Sharp"
                                 src="http://via.placeholder.com/150x150"/>
                        </span>
                        <Tooltip placement="right" isOpen={this.state.tooltipOpen} target="tooltip-icon"
                                 toggle={this.toggle}>
                            Hello Jumbo!
                        </Tooltip>
                    </CardBox>

                    <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                             childrenStyle="d-flex justify-content-center"
                             heading={<IntlMessages id="component.tooltips.button"/>}>
                        <div>
                              <span id="tooltip-fab">
                            <Button color="primary" className="gx-fab-btn gx-btn-primary mb-0">
                                <i className="zmdi zmdi-plus zmdi-hc-lg"/>
                            </Button>
                        </span>
                            <Tooltip placement="right" isOpen={this.state.tooltip1} target="tooltip-fab"
                                     toggle={this.toggle1}>
                                Hello Jumbo!
                            </Tooltip>
                        </div>

                    </CardBox>

                    <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                             childrenStyle="d-flex justify-content-center"
                             heading={<IntlMessages id="component.tooltips.icon"/>}>
                        <div>
                             <span className="icon-btn" id="tooltip-add">
                                      <i className="zmdi zmdi-account-add"/>
                                  </span>
                            <Tooltip placement="right" isOpen={this.state.tooltip2} target="tooltip-add"
                                     toggle={this.toggle2}>
                                Hello Jumbo!
                            </Tooltip>
                        </div>

                    </CardBox>

                    <CardBox styleName="col-xl-3 col-md-3 col-sm-6 col-12 text-center"
                             childrenStyle="d-flex justify-content-center"
                             heading={<IntlMessages id="component.tooltips.controlled"/>}>
                        <ControlledTooltips/>
                    </CardBox>
                </div>

                <div className="row">
                    <CardBox styleName="col-xl-12" heading={<IntlMessages id="component.tooltips.positioned"/>}>
                        <PositionedTooltips/>
                    </CardBox>
                </div>
            </div>
        );
    }
}

export default Tooltips;