import React, {Component} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap';

const users = [
    {id: 1, color: 'dark', icon: 'wifi', name: 'Wi-Fi'},
    {id: 2, color: 'dark', icon: 'bluetooth', name: 'Bluetooth'},
    {id: 3, color: 'dark', icon: 'mic', name: 'Mic'},
    {id: 4, color: 'dark', icon: 'remote-control', name: 'Remote Control'}];


class SwitchListSecondary extends Component {
    state = {
        checked: [1],
    };

    handleToggle = (event, value) => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    render() {
        return (
            <div className="pt-3">
                <h3 className="ml-4">Settings</h3>
                <ListGroup>
                    {users.map((item) => {
                            return (
                                <ListGroupItem key={item.id} className="d-flex align-items-center border-0">
                                    <span className="mr-3">
                                          <i className={`zmdi zmdi-hc-fw zmdi-hc-2x zmdi-${item.icon} text-${item.color}`}/>

                                    </span>
                                    <ListGroupItemText className="br-break mb-0">{item.name}</ListGroupItemText>
                                    <div className="form-checkbox ml-auto mt-2">
                                        <input type="checkbox"
                                               color="primary"
                                               onChange={event => this.handleToggle(event, item.id)}
                                               checked={this.state.checked.indexOf(item.id) !== -1}
                                        />
                                        <span className="check">
                             <i className="zmdi zmdi-check zmdi-hc-lg"/>
                           </span>
                                    </div>
                                </ListGroupItem>
                            );
                        }
                    )}
                </ListGroup>
            </div>
        );
    }
}


export default SwitchListSecondary;