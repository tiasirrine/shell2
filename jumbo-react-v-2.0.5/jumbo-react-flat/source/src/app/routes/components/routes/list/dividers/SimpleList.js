import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';


function SimpleList() {
    return (
        <div className="w-100">
            <ListGroup>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-email mr-3"/>
                    Inbox
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-mail-send mr-3"/>
                    Sent
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-star mr-3"/>
                    Starred
                </ListGroupItem>
                <ListGroupItem className="border-left-0 border-right-0 border-bottom-0" href="javascript:void(0)"
                               action>
                    Spam (10)
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    Trash
                </ListGroupItem>
            </ListGroup>

        </div>
    );
}

export default SimpleList;