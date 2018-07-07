import React, {Component} from 'react';
import {ListGroup, ListGroupItem, ListGroupItemText, Modal, ModalBody, ModalHeader} from 'reactstrap';


class SimpleModal extends Component {

    render() {
        const {users, open, onClose} = this.props;
        return (
            <div className="text-center">
                <Modal style={{width: 330, height: 100}} isOpen={open} toggle={() => onClose(users.email)}
                       className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Set backup account</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            {users.map(user =>
                                <ListGroupItem key={user.email} value={user.email}
                                               onClick={() => onClose(user.email)}
                                               className="pointer d-flex align-items-center border-0"
                                               action
                                >
                                    <span className="mr-3">
                                        <img className="user-avatar size-50" alt="Remy Sharp"
                                             src={user.image}/></span>
                                    <ListGroupItemText
                                        className="br-break mb-0">{user.email}
                                    </ListGroupItemText>
                                </ListGroupItem>,
                            )}

                            <ListGroupItem className="pointer d-flex align-items-center border-0"
                                           onClick={() => onClose('Add Account')}
                                           action>
                                        <span className="user-avatar bg-dark size-40 ml-1">
                                            <i className="zmdi zmdi-plus text-white zmdi-hc-2x"/>
                                        </span>
                                <span className="mb-0 ml-4 h4">Add Account</span>
                            </ListGroupItem>

                        </ListGroup>

                    </ModalBody>
                </Modal>

            </div>
        );
    }
}

export default SimpleModal;