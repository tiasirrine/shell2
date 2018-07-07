import React from 'react';
import {Button, ButtonDropdown, ButtonGroup, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap';


class NestedButtonGroup extends React.Component {
    toggle = () => {
        this.setState({
            dropDownOpen: !this.state.dropDownOpen
        })
    };

    constructor() {
        super();
        this.state = {
            dropDownOpen: false
        };
    }

    render() {
        return (
            <ButtonGroup vertical={this.props.isVertical}>
                <Button className="jr-btn jr-btn-default">Left</Button>
                <Button className="jr-btn jr-btn-default">Middle</Button>
                <ButtonDropdown isOpen={this.state.dropDownOpen} toggle={this.toggle}>
                    <DropdownToggle className="jr-btn border-0 no-shadow bg-secondary text-white" caret>
                        Right
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Dropdown Link</DropdownItem>
                        <DropdownItem>Dropdown Link</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
            </ButtonGroup>
        );
    };
}

export default NestedButtonGroup;