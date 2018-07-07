import React from 'react';
import {Button} from 'reactstrap'
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';

class DateAndTimePickers extends React.Component {
    state = {
        open: false,
    };
    setOpen = ({open}) => {
        this.setState({open});
    };

    toggleOpen = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    render() {
        return (
            <div>
                <Button className="date-btn" color="primary" size="sm" onClick={this.toggleOpen}>Open</Button>
                <TimePicker
                    open={this.state.open}
                    onOpen={this.setOpen}
                    onClose={this.setOpen}
                    focusOnOpen
                />
            </div>
        );
    }
}

export default DateAndTimePickers;