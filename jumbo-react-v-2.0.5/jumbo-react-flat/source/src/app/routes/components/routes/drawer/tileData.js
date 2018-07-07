import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

export const mailFolderListItems = (
    <div className="rc-drawer-sidebar-dark-theme inside-drawer">
        <ListGroup>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-inbox zmdi-hc-lg"/></span>Inbox
            </ListGroupItem>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-star zmdi-hc-lg"/></span>Starred
            </ListGroupItem>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-mail-send zmdi-hc-lg"/></span>Send mail
            </ListGroupItem>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-email-open zmdi-hc-lg"/></span>Drafts
            </ListGroupItem>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-email zmdi-hc-lg"/></span>All mail
            </ListGroupItem>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-delete zmdi-hc-lg"/></span>Trash
            </ListGroupItem>

            <ListGroupItem>
                <span className="icon-btn"><i className="zmdi zmdi-alert-octagon zmdi-hc-lg"/></span>Spam
            </ListGroupItem>

        </ListGroup>
    </div>
);

export default mailFolderListItems