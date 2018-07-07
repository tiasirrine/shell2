import React from 'react';
import {Dropdown, DropdownMenu, DropdownToggle} from 'reactstrap';

import {SortableElement, SortableHandle} from 'react-sortable-hoc';

const DragHandle = SortableHandle(() =>
    <i className="zmdi zmdi-menu draggable-icon" style={{fontSize: 25}}/>);

class ContactCell extends React.Component {

    toggle = () => {
        this.setState({menuState: !this.state.menuState});
    };
    onDeleteContact = (contact) => {
        this.setState({addContactState: false});
        this.props.onDeleteContact(contact);
    };

    constructor() {
        super();
        this.state = {
            menuState: false,
            addContactState: false,
        }
    }

    render() {
        const {contact} = this.props;
        const {menuState} = this.state;
        const {name, thumb, email, phone, designation} = contact;
        return (
            <div className="col-12">
                <div className="contact-item ripple no-gutters align-items-center py-2 px-3 py-sm-4 px-sm-6">

                    <DragHandle/>
                    {(thumb === null || thumb === '') ?
                        <div className="rounded-circle size-40 bg-blue text-center text-white mx-4"
                             style={{fontSize: 20}}>
                            {name.charAt(0).toUpperCase()}
                        </div> :
                        <img className="rounded-circle size-40 mx-4" alt={name} src={thumb}/>}

                    <div className="col text-truncate font-weight-bold">{name}</div>


                    <div className="col email text-truncate px-1 d-none d-lg-flex">
                        {email}
                    </div>

                    <div className="col phone text-truncate px-1 d-none d-md-flex">
                        {phone}
                    </div>

                    <div className="col job-title text-truncate px-1 d-none d-sm-flex">
                        {designation}
                    </div>

                    <div className="col-auto actions">

                        <Dropdown isOpen={menuState} toggle={this.toggle.bind(this)}>
                            <DropdownToggle
                                tag="span"
                                onClick={this.toggle.bind(this)}
                                data-toggle="dropdown"
                                aria-expanded={menuState}>
                               <span className="icon-btn">
                                    <i className="zmdi zmdi-more-vert"/>
                                </span>
                            </DropdownToggle>
                            <DropdownMenu>
                                <div className="p-2 text-center" onClick={this.toggle}>Edit</div>
                                <div className="pl-2 text-center" onClick={this.toggle}>Delete</div>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortableElement(ContactCell);