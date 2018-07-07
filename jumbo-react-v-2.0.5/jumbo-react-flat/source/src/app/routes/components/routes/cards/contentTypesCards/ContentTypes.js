import React from 'react';
import {Button, Card, CardBody, CardText} from 'reactstrap';


const ContentTypes = () => {
    return (
        <Card>
            <CardBody>
                <h3 className="card-title">Card Title</h3>
                <CardText>
                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                </CardText>
            </CardBody>
            <div className="card-mt-footer">
                <Button href="javascript:void(0)" className="card-link" color="default">YES</Button>
                <Button href="javascript:void(0)" className="card-link" color="default">NO</Button>
            </div>
        </Card>
    );
};
export default ContentTypes;