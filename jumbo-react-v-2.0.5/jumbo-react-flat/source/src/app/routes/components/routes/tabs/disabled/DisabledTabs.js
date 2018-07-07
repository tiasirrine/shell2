import React, {Component} from 'react';
import {Card, CardBody, CardHeader, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';

class DisabledTabs extends Component {
    handleChange = (event, value) => {
        this.setState({value});
    };

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader className="bg-primary">
                        <Nav className="nav-fill card-header-tabs" tabs>
                            <NavItem>
                                <NavLink
                                    className={this.state.activeTab === '1' ? 'active' : ''}
                                    onClick={() => {
                                        this.toggle('1');
                                    }}>
                                    Active
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled
                                         className={this.state.activeTab === '2' ? 'active' : ''}
                                         onClick={() => {
                                             this.toggle('2');
                                         }}>
                                    TAB 1
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={this.state.activeTab === '3' ? 'active' : ''}
                                    onClick={() => {
                                        this.toggle('3');
                                    }}>
                                    TAB 2
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </CardHeader>


                    <TabContent activeTab={this.state.activeTab}>

                        <TabPane tabId="1">
                            <CardBody>
                                <h3 className="card-title">Card Active</h3>
                            </CardBody>
                        </TabPane>

                        <TabPane tabId="2">
                            <CardBody>
                                <h3 className="card-title">Card Title 1</h3>
                            </CardBody>
                        </TabPane>

                        <TabPane tabId="3">
                            <CardBody>
                                <h3 className="card-title">Card Title 2</h3>
                            </CardBody>
                        </TabPane>

                    </TabContent>

                </Card>
            </div>
        );
    }
}

export default DisabledTabs;