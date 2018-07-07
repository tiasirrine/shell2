import React from 'react';
import {ListGroup, ListGroupItem} from 'reactstrap';

function CardsListItem({styleName, data}) {
    const {image,image2, name,description} = data;
    return (
        <div className="user-list d-sm-flex flex-sm-row card">
            <img alt="..." src={image} className="user-avatar border-0"/>
                <div className="description">
                    <h3>{name}</h3>
                    <p>{description}</p>
                    <ListGroup className="list-inline d-sm-flex flex-sm-row gx-btn-list">
                        <ListGroupItem className="border-0">
                            <a className="btn btn-light jr-btn-rounded" href="javascript:void(0)">Hire Me</a>
                        </ListGroupItem>
                        <ListGroupItem className="border-0">
                            <a className="btn btn-light jr-btn-rounded" href="javascript:void(0)">Message</a>
                        </ListGroupItem>
                    </ListGroup>
                </div>

                <div className="img-section ml-sm-4 mb-2">
                    <img className="img-fluid " src={image2} alt="..."/>
                </div>
        </div>


    );
}

export default CardsListItem;