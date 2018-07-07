import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

function InsetDividers() {
    return (
        <ListGroup>

            <ListGroupItem className="ripple-effect-click"
                           href="javascript:void(0)" action>
                <div className="media">
                    <div className="mr-3 mb-2">
                        <span className="user-avatar  bg-grey size-40">
                            <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <p className="mb-0">Photos</p>
                        <span className="text-muted"><small>March 9, 2018</small></span>
                    </div>
                </div>
            </ListGroupItem>

            <ListGroupItem className="list-group-item-action list-group-item"
                           href="javascript:void(0)">
                <div className="media">
                    <div className="mr-3 mb-2">
                        <span className="user-avatar  bg-grey size-40">
                             <i className="zmdi zmdi-file zmdi-hc-fw zmdi-hc-lg text-white"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <p className="mb-0">Work</p>
                        <span className="text-muted"><small>Jan 7, 2018</small></span>
                    </div>
                </div>
            </ListGroupItem>

            <ListGroupItem className="list-group-item-action list-group-item"
                           href="javascript:void(0)">
                <div className="media">
                    <div className="mr-3 mb-2">
                        <span className="user-avatar  bg-grey size-40">
                             <i className="zmdi zmdi-account zmdi-hc-fw zmdi-hc-lg text-white"/>
                        </span>
                    </div>
                    <div className="media-body">
                        <p className="mb-0">Meetings</p>
                        <span className="text-muted"><small>April 20, 2018</small></span>
                    </div>
                </div>
            </ListGroupItem>
        </ListGroup>
    );
}

export default (InsetDividers);