import React from 'react';
import {Collapse, ListGroup, ListGroupItem} from 'reactstrap';

class NestedList extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false};
    }

    toggle() {
        this.setState({collapse: !this.state.collapse});
    }

    render() {
        return (
            <ListGroup>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-email mr-3"/>
                    Inbox
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-mail-send mr-3"/>
                    Sent
                </ListGroupItem>
                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-email-open mr-3"/>
                    Spam
                </ListGroupItem>

                <ListGroupItem tag="a" href="javascript:void(0)" className="border-0 d-flex">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-star mr-3 text-dark"/><span className="text-dark">Starred</span>
                    {this.state.collapse ?
                        <span className="ml-auto" onClick={this.toggle}><i
                            className="zmdi zmdi-hc-lg zmdi-chevron-down text-dark"/></span>
                        : <span className="ml-auto" onClick={this.toggle}><i
                            className="zmdi zmdi-hc-lg zmdi-chevron-up ml-auto text-dark"/></span>
                    }
                </ListGroupItem>
                <Collapse isOpen={this.state.collapse}>
                    <ListGroupItem href="javascript:void(0)" action className="border-0">
                        <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-gps-dot mr-3"/>
                        Gps
                    </ListGroupItem>
                </Collapse>

                <ListGroupItem href="javascript:void(0)" action className="border-0">
                    <i className="zmdi zmdi-hc-fw zmdi-hc-lg zmdi-delete mr-3"/>
                    Trash
                </ListGroupItem>

            </ListGroup>

        );
    }
}

export default NestedList;