import React, {Component} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemText} from 'reactstrap';

const users = [
    {id: 1, image: 'http://via.placeholder.com/150x150', email: 'jhonsmith@example.com'},
    {id: 2, image: 'http://via.placeholder.com/150x150', email: 'stella02@example.com'},
    {id: 3, image: 'http://via.placeholder.com/150x150', email: 'chrris0254@example.com'}];

class CheckboxListSecondary extends Component {
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
            <ListGroup className="overflow-hidden">
                {users.map(user =>
                    <ListGroupItem key={user.email} className="d-flex align-items-center" action>
                        <span className="mr-3"><img className="user-avatar size-50" alt="Remy Sharp" src={user.image}/></span>
                        <ListGroupItemText className="br-break mb-0">{user.email}</ListGroupItemText>
                        <div className="form-checkbox ml-auto mt-2">
                            <input type="checkbox"
                                   color="primary"
                                   onChange={event => this.handleToggle(event, user.id)}
                                   checked={this.state.checked.indexOf(user.id) !== -1}
                            />
                            <span className="check">
                             <i className="zmdi zmdi-check zmdi-hc-lg"/>
                           </span>
                        </div>
                    </ListGroupItem>,
                )}
            </ListGroup>
        );
    }
}

export default CheckboxListSecondary;