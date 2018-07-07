import React from 'react';
import {Badge, ListGroup, ListGroupItem} from 'reactstrap';

function InsetAvatarDividers() {
    return (
        <ListGroup className="w-100">

            <ListGroupItem className="d-flex align-items-center"
                           href="javascript:void(0)" action>
                <div className="media">
                    <div className="mr-3 mb-2">
                        <img className="user-avatar size-50" alt="Remy Sharp"
                             src="http://via.placeholder.com/150x150"/>
                    </div>
                    <div className="media-body">
                        <p className="mb-0">Photos</p>
                        <span className="text-muted"><small>March 9, 2018</small></span>
                    </div>
                </div>
                <Badge className="ml-auto" color="primary" pill>ADMIN</Badge>

            </ListGroupItem>

            <ListGroupItem className="d-flex align-items-center"
                           href="javascript:void(0)" action>
                <div className="media">
                    <div className="mr-3 mb-2">
                        <img className="user-avatar size-50" alt="Remy Sharp"
                             src="http://via.placeholder.com/150x150"/>
                    </div>
                    <div className="media-body">
                        <p className="mb-0">Work</p>
                        <span className="text-muted"><small>Jan 7, 2018</small></span>
                    </div>
                </div>
                <Badge className="ml-auto" color="warning" pill>GUEST</Badge>
            </ListGroupItem>

            <ListGroupItem className="d-flex align-items-center"
                           href="javascript:void(0)" action>
                <div className="media">
                    <div className="mr-3 mb-2">
                        <img className="user-avatar size-50" alt="Remy Sharp"
                             src="http://via.placeholder.com/150x150"/>
                    </div>
                    <div className="media-body">
                        <p className="mb-0">Meetings</p>
                        <span className="text-muted"><small>April 20, 2018</small></span>
                    </div>
                </div>
                <Badge className="ml-auto" color="danger" pill>AGENT</Badge>
            </ListGroupItem>
        </ListGroup>
    );
}

export default (InsetAvatarDividers);