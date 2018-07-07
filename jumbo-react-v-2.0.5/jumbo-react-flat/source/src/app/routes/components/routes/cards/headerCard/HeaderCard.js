import React from 'react';
import {Button, Card, CardBody, CardHeader, CardSubtitle, CardText} from 'reactstrap';

const HeaderCard = () => {
    return (
        <Card>
            <CardHeader>Features</CardHeader>
            <CardBody>
                <h3 className="card-title">Special Title Treatment</h3>
                <CardSubtitle>A new subheading you can use</CardSubtitle>
                <CardText>
                    All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making
                    this the first true generator on the Internet. It uses a dictionary of over 200 Latin words,
                    combined with a handful of model sentence structures,
                </CardText>
                <CardText>
                    making it look like
                    readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
                    default model text,
                </CardText>
                <Button color="default" className="btn btn-sm  btn-primary text-white">Go somewhere</Button>
                <Button href="javascript:void(0)" className="card-link btn btn-default"
                        color="default">Another Link</Button>
            </CardBody>
        </Card>
    );
};
export default HeaderCard;