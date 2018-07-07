import React from 'react';
import 'rc-collapse/assets/index.css';
import Collapse, {Panel} from 'rc-collapse';
import '../simple.css';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function random() {
    return parseInt(Math.random() * 10, 10) + 1;
}

class Simple extends React.Component {
    state = {
        time: random(),
        accordion: false,
        activeKey: ['4'],
    };

    onChange = (activeKey) => {
        this.setState({
            activeKey,
        });
    };
    setActivityKey = () => {
        this.setState({
            activeKey: ['2'],
        });
    };
    reRender = () => {
        this.setState({
            time: random(),
        });
    };
    toggle = () => {
        this.setState({
            accordion: !this.state.accordion,
        });
    };

    getItems() {
        const items = [];
        for (let i = 0, len = 3; i < len; i++) {
            const key = i + 1;
            items.push(
                <Panel header={`This is panel header ${key}`} key={key}>
                    <p>{text.repeat(this.state.time)}</p>
                </Panel>
            );
        }
        items.push(
            <Panel header={`This is panel header 4`} key="4">
                <p>{text.repeat(this.state.time)}</p>
            </Panel>
        );

        items.push(
            <Panel header={`This is panel header 5`} key="5">
                <p>{text.repeat(this.state.time)}</p>
            </Panel>
        );

        return items;
    }

    render() {
        const accordion = this.state.accordion;
        const btn = accordion ? 'Mode: accordion' : 'Mode: collapse';
        const activeKey = this.state.activeKey;
        return (<div>
            <Collapse
                accordion={accordion}
                onChange={this.onChange}
                activeKey={activeKey}>
                {this.getItems()}
            </Collapse>
        </div>);
    }
}


export default Simple