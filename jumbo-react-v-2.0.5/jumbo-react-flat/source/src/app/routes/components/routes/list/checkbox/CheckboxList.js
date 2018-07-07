import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';


const lists = [
    {id: 1, icon: 'label', name: 'Label', color: 'primary'},
    {id: 2, icon: 'layers', name: 'Layer', color: 'info'},
    {id: 3, icon: 'lamp', name: 'Lamp', color: 'secondary'},
    {id: 4, icon: 'movie', name: 'Movie', color: 'warning'},
    {id: 5, icon: 'puzzle-piece', name: 'Puzzle', color: 'danger'}];

class CheckboxList extends Component {
    state = {
        checked: [0],
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
                {lists.map(item =>
                    <ListGroupItem key={item.id} onClick={event => this.handleToggle(event, item.id)}
                                   className="d-flex" action>
                        <div className="form-checkbox mr-3">
                            <input type="checkbox"
                                   color="primary"
                                   checked={this.state.checked.indexOf(item.id) !== -1}
                                   tabIndex="-1"/>
                            <span className="check">
                             <i className="zmdi zmdi-check zmdi-hc-lg"/>
                           </span>
                        </div>
                        {item.name}

                        <span className="ml-auto">
                                <i className={`zmdi zmdi-hc-lg zmdi-${item.icon} text-${item.color}`}/>
                        </span>

                    </ListGroupItem>,
                )}
            </ListGroup>
        );
    }
}

export default CheckboxList;