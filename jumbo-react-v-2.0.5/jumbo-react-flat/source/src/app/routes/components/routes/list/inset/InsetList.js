import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

const lists = [
    {id: 1, icon: 'email', name: 'Inbox', color: 'dark'},
    {id: 2, icon: 'mail-send', name: 'Sent', color: 'dark'},
    {id: 3, icon: '', name: 'Spam (10)', color: 'dark'},
    {id: 4, icon: 'star', name: 'Starred', color: 'dark'},
    {id: 5, icon: '', name: 'Trash', color: 'dark'}];

function InsetList() {
    return (

        <ListGroup className="pb-0">
            {lists.map((item, index) =>

                    <ListGroupItem key={index} href="javascript:void(0)" action className="border-0">
                        <i className={`zmdi zmdi-hc-fw zmdi-hc-lg zmdi-${item.icon} text-${item.color} mr-4`}/>
                        <span className="text-dark">{item.name}</span>
                    </ListGroupItem>
            )}
        </ListGroup>

    );
}

export default InsetList;