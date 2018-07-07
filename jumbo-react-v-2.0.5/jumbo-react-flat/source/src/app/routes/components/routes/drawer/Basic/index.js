import React, {Component} from 'react';
import {Button} from 'reactstrap';
import '../simple.css';
import Drawer from 'rc-drawer';
import CardBox from 'components/CardBox';
import {mailFolderListItems} from '../tileData';

class Basic extends Component {
    onOpenChange = (open) => {
        console.log('onOpenChange', open);
        this.setState({open});
    };
    onDock = () => {
        const docked = !this.state.docked;
        this.setState({
            docked,
        });
        if (!docked) {
            this.onOpenChange(false);
        }
    };

    constructor(props) {
        super(props);

        this.state = {
            left: false, right: false, top: false, bottom: false,
        };
    }

    render() {

        const {
            left, right, top, bottom
        } = this.state;
        return (
            <div className="col-12">
                <div className="drawer-box">

                    <Drawer sidebar={mailFolderListItems} position="left" touch open={left}
                            onOpenChange={() => {
                                this.setState({left: false});
                            }} style={{overflow: 'auto'}}>
                    </Drawer>

                    <Drawer sidebar={mailFolderListItems} position="right" touch open={right}
                            onOpenChange={() => {
                                this.setState({right: false});
                            }} style={{overflow: 'auto'}}>
                    </Drawer>

                    <Drawer sidebar={mailFolderListItems} position="top" touch open={top}
                            onOpenChange={() => {
                                this.setState({top: false});
                            }} style={{overflow: 'auto'}}>
                    </Drawer>

                    <Drawer sidebar={mailFolderListItems} position="bottom" touch open={bottom}
                            onOpenChange={() => {
                                this.setState({bottom: false});
                            }} style={{overflow: 'auto'}}>
                    </Drawer>

                    <div className="row">

                        <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                            <Button color="primary" className="jr-btn" onClick={() => {
                                this.setState({left: true});
                            }}>
                                <i className="zmdi zmdi-long-arrow-right"/>
                                <span>Open Left</span>
                            </Button>
                        </CardBox>

                        <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                            <Button color="primary" className="jr-btn" onClick={() => {
                                this.setState({right: true});
                            }}>
                                <i className="zmdi zmdi-long-arrow-left"/>
                                <span>Open Right</span>
                            </Button>
                        </CardBox>

                        <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                            <Button color="primary" className="jr-btn btn" onClick={() => {
                                this.setState({top: true});
                            }}>
                                <i className="zmdi zmdi-long-arrow-down"/>
                                <span>Open Top</span>
                            </Button>
                        </CardBox>

                        <CardBox styleName="col-lg-3 col-sm-6" cardStyle="text-center py-sm-5">
                            <Button color="primary" className="jr-btn" onClick={() => {
                                this.setState({bottom: true});
                            }}>
                                <i className="zmdi zmdi-long-arrow-up"/>
                                <span>Open Bottom</span>
                            </Button>
                        </CardBox>
                    </div>

                </div>
            </div>);
    }
}

export default Basic