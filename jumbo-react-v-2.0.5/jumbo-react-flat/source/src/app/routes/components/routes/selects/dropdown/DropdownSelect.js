import React from 'react';
import {Form, FormGroup, Input} from 'reactstrap';

class DropdownSelect extends React.Component {
    render() {
        return (
            <Form>
                <FormGroup>
                    <Input type="select" name="select" id="exampleSelect">
                        <option>John</option>
                        <option>Stella</option>
                        <option>Dorris</option>
                        <option>Smith</option>
                        <option>Dommic</option>
                    </Input>
                </FormGroup>
            </Form>
        );
    }
}

export default DropdownSelect;