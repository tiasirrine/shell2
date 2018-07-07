import React from 'react';
import PropTypes from 'prop-types';
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

class ListDemo extends React.Component {
    state = {
        value: undefined,
    };
    radioGroup = null;
    handleEntering = () => {
        this.radioGroup.focus();
    };
    handleCancel = () => {
        this.props.onClose(this.props.value);
    };
    handleOk = () => {
        this.props.onClose(this.state.value);
    };
    handleChange = (event, value) => {
        this.setState({value});
    };

    componentWillMount() {
        this.setState({value: this.props.value});
    }

    componentWillUpdate(nextProps) {
        if (nextProps.value !== this.props.value) {
            // eslint-disable-next-line react/no-will-update-set-state
            this.setState({value: nextProps.value});
        }
    }

    render() {
        const {value, ...other} = this.props;

        return (

            <Modal style={{maxHeight: 150, width: 300}} isOpen={this.state.modal} toggle={this.toggle}
                   className={this.props.className}>
                <ModalHeader>Use Google's location service?</ModalHeader>
                <ModalBody>
                    <ListGroup>
                        <ListGroupItem>
                            {options.map(option => (
                                <div className="pointer custom-control custom-radio" key={option}>
                                    <input type="radio" id={option} name="customRadio" className="custom-control-input"
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
        );
    }
}

ConfirmationDialog.propTypes = {
    onClose: PropTypes.func,
    value: PropTypes.string,
};

class ConfirmationDialogDemo extends React.Component {
    state = {
        open: false,
        value: 'Dione',
    };

    button = undefined;

    handleClickListItem = () => {
        this.setState({open: true});
    };

    handleRequestClose = value => {
        this.setState({value, open: false});
    };

    render() {
        return (
            <div className="d-inline-block w-100">
                <List>
                    <ListItem button divider disabled>
                        <ListItemText primary="Interruptions"/>
                    </ListItem>
                    <ListItem
                        button
                        divider
                        aria-haspopup="true"
                        aria-controls="ringtone-menu"
                        aria-label="Phone ringtone"
                        onClick={this.handleClickListItem}
                    >
                        <ListItemText primary="Phone ringtone" secondary={this.state.value}/>
                    </ListItem>
                    <ListItem button divider disabled>
                        <ListItemText primary="Default notification ringtone" secondary="Tethys"/>
                    </ListItem>
                    <ConfirmationDialog
                        open={this.state.open}
                        onClose={this.handleRequestClose}
                        value={this.state.value}
                    />
                </List>
            </div>
        );
    }
}

export default ListDemo;