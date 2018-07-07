import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane
} from 'reactstrap';

function TabContainer({children, dir}) {
    return (
        <div dir={dir}>
            {children}
        </div>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

class TabCards extends Component {
    handleChange = (event, value) => {
        this.setState({value});
    };
    handleChangeIndex = index => {
        this.setState({value: index});
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
        const {theme} = this.props;

        return (
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
                            <NavLink
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
                            <CardSubtitle>Sub-heading text</CardSubtitle>
                            <CardText>
                                Small plates, salads & sandwiches in an
                                intimate setting with 12 indoor seats plus
                                patio seating
                            </CardText>
                            <CardText>
                                Donec imperdiet enim et dignissim interdum. Pellentesque in ortti tor elit.
                                Curabitur consectetur.
                            </CardText>
                        </CardBody>
                        <CardFooter>2 days ago</CardFooter>
                    </TabPane>

                    <TabPane tabId="2">
                        <CardBody>
                            <h3 className="card-title">Card Title 1</h3>
                            <CardSubtitle>Sub-heading Title 1</CardSubtitle>
                            <CardText>
                                It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </CardText>
                            <CardText>
                                Donec imperdiet enim et dignissim interdum. Pellentesque in ortti tor elit.
                                Curabitur consectetur.
                            </CardText>
                        </CardBody>
                        <CardFooter>2 days ago</CardFooter>
                    </TabPane>

                    <TabPane tabId="3">
                        <CardBody>
                            <h3 className="card-title">Card Title 2</h3>
                            <CardSubtitle>Sub-heading Title 2</CardSubtitle>
                            <CardText>
                                Small plates, salads & sandwiches in an
                                intimate setting with 12 indoor seats plus
                                patio seating
                            </CardText>
                            <CardText>
                                It has
                                survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </CardText>
                        </CardBody>
                        <CardFooter>2 days ago</CardFooter>
                    </TabPane>

                </TabContent>

            </Card>

        );
    }
}


export default TabCards;