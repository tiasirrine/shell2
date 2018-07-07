import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const lists = [
    {id: 1, icon: 'facebook', name: 'Facebook', color: 'primary'},
    {id: 2, icon: 'apple', name: 'Apple', color: 'info'},
    {id: 3, icon: 'github', name: 'GitHub', color: 'secondary'},
    {id: 4, icon: 'google-maps', name: 'Google Map', color: 'warning'},
    {id: 5, icon: 'instagram', name: 'Instagram', color: 'danger'}];

class LeftIconList extends Component {
    render() {
        return (
            <ListGroup className="list-group">
                {lists.map((item, index) =>

                        <ListGroupItem key={index} href="javascript:void(0)" tag="a" className="list-group-item-action list-group-item list-group-item pointer">
                            <i className={`zmdi zmdi-hc-fw zmdi-hc-lg zmdi-${item.icon} text-${item.color} mr-3`}/>
                            {item.name}
                        </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}

export default LeftIconList;