import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';


function PlainListItem({styleName, data}) {
    const {image, name, work, like, comments, description} = data;
    return (
        <div className="user-list d-sm-flex flex-sm-row">
            <img alt="avatar" src={image} className="user-avatar border-0"/>
            <div className="description">
                <h3>{name}</h3>
                <h5>in <a className="font-weight-bold" href="javascript:void(0)">{work}</a></h5>
                <p>{description}</p>
                <ListGroup className="list-inline d-sm-flex flex-sm-row gx-btn-list">
                    <ListGroupItem className="border-0 bg-transparent">
                        <a className="meta-like" href="javascript:void(0)">
                            <i className="zmdi zmdi-favorite zmdi-hc-lg text-red"/>
                            {like}
                        </a>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 bg-transparent">
                        <a className="meta-comment" href="javascript:void(0)">
                            <i className="zmdi zmdi-comment-outline zmdi-hc-lg"/>
                            {comments}
                        </a>
                    </ListGroupItem>
                </ListGroup>
            </div>
        </div>

    );
}

export default PlainListItem;