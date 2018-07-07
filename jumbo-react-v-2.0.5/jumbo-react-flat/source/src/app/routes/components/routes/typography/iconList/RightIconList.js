import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const lists = [
    {id: 1, icon: 'facebook', name: 'Facebook', color: 'primary'},
    {id: 2, icon: 'apple', name: 'Apple', color: 'info'},
    {id: 3, icon: 'github', name: 'GitHub', color: 'secondary'},
    {id: 4, icon: 'google-maps', name: 'Google Map', color: 'warning'},
    {id: 5, icon: 'instagram', name: 'Instagram', color: 'danger'}];

class RightIconList extends Component {
    render() {
        return (
            <ListGroup className="pb-0">
                {lists.map((item, index) =>

                        <ListGroupItem key={index} action className="d-flex justify-content-between align-items-center pointer" tag="a"
                                       href="javascript:void(0)">
                            {item.name}
                            <i className={`zmdi zmdi-hc-fw zmdi-hc-lg zmdi-${item.icon} text-${item.color} ml-3`}/>
                        </ListGroupItem>
                )}
            </ListGroup>
        );
    }
}

export default RightIconList;