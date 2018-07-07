import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

class TimeoutModals extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <Button className="jr-btn btn-primary text-white" color="primary" onClick={this.toggle}>Modals
                    Transition Timeouts</Button>
                <Modal isOpen={this.state.modal} modalTransition={{timeout: 1}} backdropTransition={{timeout: 5}}
                       toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Use Google's location service?</ModalHeader>
                    <ModalBody>
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.toggle}>Disagree</Button>{' '}
                        <Button color="link" onClick={this.toggle}>Agree</Button>
                    </ModalFooter>
                </Modal>
            </div>

        );
    }
}

export default TimeoutModals;