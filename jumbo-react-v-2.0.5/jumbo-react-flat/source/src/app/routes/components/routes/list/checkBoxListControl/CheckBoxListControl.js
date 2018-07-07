import React, {Component} from 'react';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';

const users = [
    {id: 1, image: 'http://via.placeholder.com/150x150', email: 'henrric@example.com'},
    {id: 2, image: 'http://via.placeholder.com/150x150', email: 'stella02@example.com'},
    {id: 3, image: 'http://via.placeholder.com/150x150', email: 'chrris@example.com'},
    {id: 4, image: 'http://via.placeholder.com/150x150', email: 'jhonson@example.com'},
    {id: 5, image: 'http://via.placeholder.com/150x150', email: 'domnic@example.com'}];

class CheckBoxListControl extends Component {
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
            <ListGroup>
                {users.map(user =>
                    <ListGroupItem className="d-flex align-items-center" key={user.email}>

                        <div className="media">
                            <div className="mr-3 mb-2">
                                <img className="user-avatar size-50" alt="Remy Sharp" src={user.image}/>
                            </div>
                            <div className="media-body">
                                <h3 className="mb-0">{user.email}</h3>
                                <span className="text-muted"><small>March 9, 2018</small></span>
                            </div>
                        </div>

                        <Badge className="text-uppercase ml-auto" color="success" pill>Agent</Badge>

                        <div className="form-checkbox mx-3 ">
                            <input type="checkbox"
                                   color="primary"
                                   onChange={event => this.handleToggle(event, user.id)}
                                   checked={this.state.checked.indexOf(user.id) !== -1}
                                   tabIndex="-1"/>
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

export default CheckBoxListControl;