import React, {Component} from 'react';
import {Button, Label} from 'reactstrap';
import SimpleModal from './SimpleModal';


const users = [
    {image: 'http://via.placeholder.com/150x150', email: 'jhonsmith@example.com'},
    {image: 'http://via.placeholder.com/150x150', email: 'stella02@example.com'},
    {image: 'http://via.placeholder.com/150x150', email: 'chrris0254@example.com'}];


class SimpleDialogDemo extends Component {
    state = {
        open: false,
        selectedValue: users[1].email,
    };

    handleRequestClose = value => {
        this.setState({selectedValue: value, open: false});
    };

    render() {
        console.log(users);
        return (
            <div className="text-center">
                <Label type="subheading" className="mb-2">
                    Selected: {this.state.selectedValue}
                </Label>
                <br/>
                <Button className="jr-btn btn-primary text-white" color="primary"
                        onClick={() => this.setState({open: true})}>Open
                    simple dialog</Button>
                <SimpleModal users={users}
                             open={this.state.open}
                             onClose={this.handleRequestClose.bind(this)}/>
            </div>
        );
    }
}

export default SimpleDialogDemo;