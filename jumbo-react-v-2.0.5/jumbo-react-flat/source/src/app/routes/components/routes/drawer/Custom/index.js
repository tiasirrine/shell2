import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import Drawer from 'rc-drawer';
import CardBox from 'components/CardBox';
import '../simple.css';


class Custom extends Component {
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
            docked: false,
            open: false,
            transitions: true,
            touch: true,
            enableDragHandle: true,
            position: 'left',
            dragToggleDistance: 30,
        };
    }

    render() {

        const sidebar = (
            <div className="rc-drawer-pin inside-drawer">
                <div className="rc-drawer-pin-inner">
                    <h2 className="text-capitalize">sidebar</h2>
                    <Button color="primary" onClick={this.onDock}>
                        {this.state.docked ? 'unpin' : 'pin'}
                    </Button>

                    <p>this is content!</p>
                </div>
            </div>);

        const drawerProps = {
            docked: this.state.docked,
            open: this.state.open,
            touch: this.state.touch,
            enableDragHandle: this.state.enableDragHandle,
            position: this.state.position,
            dragToggleDistance: this.state.dragToggleDistance,
            transitions: this.state.transitions,
            onOpenChange: this.onOpenChange,
        };
        return (
            <CardBox styleName="col-12">
                <div className="drawer-container">

                    <Drawer sidebar={sidebar} {...drawerProps} position={this.props.isDirectionRTL ? 'right' : 'left'}>
                        <div className="main">
                            <Button color="primary" onClick={() => {
                                this.setState({open: !this.state.open});
                            }}>switch-open
                            </Button>
                        </div>
                    </Drawer>

                </div>
            </CardBox>);
    }
}

const mapStateToProps = ({settings}) => {
    const {isDirectionRTL} = settings;
    return {isDirectionRTL}
};

export default connect(mapStateToProps)(Custom);
