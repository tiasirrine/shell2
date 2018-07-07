import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';

export default class Example extends React.Component {
    constructor(props) {
        super(props);


        this.toggle = this.toggle.bind(this);
        this.state = {
            btnDropup: false,
            btnDropleft: false,
            btnDropright: false,
            btnDropbottom: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        return (
            <div className="d-flex justify-content-around">
                <Dropdown direction="up" isOpen={this.state.btnDropup} toggle={() => {
                    this.setState({btnDropup: !this.state.btnDropup});
                }}>
                    <DropdownToggle color="primary" caret>
                        Drop up
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="left" isOpen={this.state.btnDropleft} toggle={() => {
                    this.setState({btnDropleft: !this.state.btnDropleft});
                }}>
                    <DropdownToggle color="primary" caret>
                        Drop left
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="right" isOpen={this.state.btnDropright} toggle={() => {
                    this.setState({btnDropright: !this.state.btnDropright});
                }}>
                    <DropdownToggle color="primary" caret>
                        Drop right
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>

                <Dropdown direction="down" isOpen={this.state.btnDropbottom} toggle={() => {
                    this.setState({btnDropbottom: !this.state.btnDropbottom});
                }}>
                    <DropdownToggle color="primary" caret>
                        Drop right
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        );
    }
}