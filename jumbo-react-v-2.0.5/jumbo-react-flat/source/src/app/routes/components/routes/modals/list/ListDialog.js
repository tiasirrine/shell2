import React, {Component} from 'react';
import {Button, ListGroup, ListGroupItem, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

const options = [
    'None',
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

class ListDialog extends Component {
    handleOk = () => {
        this.setState({lastValue: this.state.selectedValue});
        this.toggle();

    };
    handleChange = (value) => {
        this.setState({selectedValue: value});
    };

    constructor(props) {
        super(props);
        this.state = {
            selectedValue: undefined,
            lastValue: 'None',
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div className="text-center">
                <ListGroup>
                    <ListGroupItem disabled>List 1</ListGroupItem>
                    <ListGroupItem className="pointer" onClick={this.toggle}>
                        <p>{this.state.lastValue}</p>
                        Dapibus ac facilisis in
                    </ListGroupItem>
                    <ListGroupItem disabled>List 3</ListGroupItem>
                </ListGroup>

                <Modal style={{maxHeight: 150, width: 300}} isOpen={this.state.modal} toggle={this.toggle}
                       className={this.props.className}>
                    <ModalHeader>Use Google's location service?</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            <ListGroupItem>
                                {options.map(option => (
                                    <div className="pointer custom-control custom-radio" key={option}>
                                        <input type="radio" id={option} name="customRadio"
                                               className="custom-control-input"
                                               onChange={this.handleChange.bind(this, option)}
                                               checked={option === this.state.selectedValue} value={option}/>
                                        <label className="custom-control-label" htmlFor={option}>{option}</label>
                                    </div>
                                ))}
                            </ListGroupItem>

                        </ListGroup>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.toggle}> Disagree</Button>{' '}
                        <Button color="link" onClick={this.handleOk}>Agree</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ListDialog;