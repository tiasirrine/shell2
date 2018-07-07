import React, {Component} from 'react';
import {Button} from 'reactstrap'
import {GoogleMap, OverlayView, withGoogleMap} from 'react-google-maps';

const STYLES = {
    mapContainer: {
        height: 500,
    },
    overlayView: {
        background: '#fff',
        border: '1px solid #ccc',
        padding: 15,
    },
};

function getPixelPositionOffset(width, height) {
    return {x: -(width / 2), y: -(height / 2)};
}

const OverlayViewExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={{lat: 47.646935, lng: -122.303763}}>
        <OverlayView
            position={{lat: 47.646935, lng: -122.303763}}

            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}

            getPixelPositionOffset={getPixelPositionOffset}>

            <div style={STYLES.overlayView}>
                <h1>OverlayView</h1>
                <Button color="primary" onClick={props.onClick}>
                    I have been clicked {props.count} time{props.count === 1 ? `` : `s`}
                </Button>
            </div>
        </OverlayView>
    </GoogleMap>
));


export default class MapOverlay extends Component {
    state = {
        count: 0,
    };

    handleClick = this.handleClick.bind(this);

    handleClick() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <OverlayViewExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
                count={this.state.count}
                onClick={this.handleClick}
            />
        );
    }
}