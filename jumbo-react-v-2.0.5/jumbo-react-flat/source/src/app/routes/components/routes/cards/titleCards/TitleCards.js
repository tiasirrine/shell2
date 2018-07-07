import React from 'react';
import {Button, Card, CardBody, CardSubtitle, CardText} from 'reactstrap';


const TitleCards = () => {
    return (
        <Card className="overflow-hidden">
            <CardBody>
                <h3 className="card-title">Card title</h3>
                <CardSubtitle>Only Title, Text and Links</CardSubtitle>
                <CardText>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Cicero are also 1914 translation by H.
                    Rackham.
                </CardText>
            </CardBody>

            <div className="card-mt-footer">
                <Button href="javascript:void(0)" className="btn btn-sm" color="link">Card Link</Button>
                <Button href="javascript:void(0)" className="btn btn-sm" color="link">Another Link</Button>
            </div>
        </Card>
    );
};
export default TitleCards;