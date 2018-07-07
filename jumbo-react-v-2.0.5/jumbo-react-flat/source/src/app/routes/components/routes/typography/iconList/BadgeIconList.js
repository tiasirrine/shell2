import React, {Component} from 'react';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';

const lists = [
    {id: 1, badge: '', name: 'Facebook', color: ''},
    {id: 2, badge: '', name: 'Apple', color: ''},
    {id: 3, badge: 'new', name: 'GitHub', color: 'primary'},
    {id: 4, badge: '', name: 'Google Map', color: ''},
    {id: 5, badge: '23-new', name: 'Instagram', color: 'danger'}];

class BadgeIconList extends Component {
    render() {
        return (
            <ListGroup className="pb-0">
                {lists.map(item =>

                        <ListGroupItem key={item.id} href="javascript:void(0)" tag="a"
                                       className="link list-group-item-action list-group-item d-flex justify-content-between align-items-center pointer">
                            {item.name}
                            <Badge className="mr-2" color={item.color}>{item.badge}</Badge>
                        </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}

export default BadgeIconList;