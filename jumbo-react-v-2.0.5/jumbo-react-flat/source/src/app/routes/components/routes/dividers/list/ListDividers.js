import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';


const lists = [
    {id: 1, icon: 'email', name: 'Inbox', color: 'dark'},
    {id: 2, icon: 'mail-send', name: 'Sent', color: 'dark'},
    {id: 3, icon: 'email-open', name: 'Drafts', color: 'dark'},
    {id: 4, icon: 'star', name: 'Starred', color: 'dark'},
    {id: 5, icon: 'delete', name: 'Trash', color: 'dark'}];

function ListDividers() {
    return (
        <ListGroup className="pb-0 overflow-hidden">
            {lists.map((item, index) =>
                <ListGroupItem className="list-group-item-action list-group-item ripple-effect-click" key={index}>
                    <a className="text-decoration" href="javascript:void(0)">
                        <i className={`zmdi zmdi-hc-fw zmdi-hc-lg zmdi-${item.icon} text-${item.color} mr-3`}/>
                        <span className="text-dark">{item.name}</span>
                    </a>

                </ListGroupItem>
            )}
        </ListGroup>
    );
}

export default (ListDividers);