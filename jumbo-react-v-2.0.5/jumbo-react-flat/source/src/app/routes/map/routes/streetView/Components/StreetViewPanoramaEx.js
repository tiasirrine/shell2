import React, {Component} from "react";
import {GoogleMap, OverlayView, StreetViewPanorama, withGoogleMap,} from "react-google-maps";

const coordinates = {lat: 49.2853171, lng: -123.1119202};

const STYLES = {
    overlayView: {
        background: `red`,
        color: `white`,
        padding: 5,
        borderRadius: `50%`,
    },
};

function getPixelPositionOffset(width, height) {
    return {x: -(width / 2), y: -(height / 2)};
}

const StreetViewPanoramaExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={coordinates}
    >
        <StreetViewPanorama
            defaultPosition={coordinates}
            visible
        >
            <OverlayView
                position={{lat: 49.28590291211115, lng: -123.11248166065218}}
                mapPaneName={OverlayView.OVERLAY_LAYER}
                getPixelPositionOffset={getPixelPositionOffset}
            >
                <div style={STYLES.overlayView}>
                    OverlayView
                </div>
            </OverlayView>
        </StreetViewPanorama>
    </GoogleMap>
));


export default class StreetViewPanoramaExample extends Component {

    render() {
        return (
            <StreetViewPanoramaExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
            />
        );
    }
}