import React from 'react';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';


const BasicCard = ({image, title, subTitle, description, btnText}) => {
    return (
        <Card className="overflow-hidden">
            <CardImg top width="100%" src={image} alt="Card image cap"/>
            <CardBody>
                <h3 className="card-title">{title}</h3>
                <CardSubtitle>{subTitle}</CardSubtitle>
                <CardText>{description}</CardText>
                <Button color="primary">{btnText}</Button>
            </CardBody>
        </Card>
    );
};
export default BasicCard;