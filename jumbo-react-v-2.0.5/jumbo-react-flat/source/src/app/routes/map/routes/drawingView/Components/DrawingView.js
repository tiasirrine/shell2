import React, {Component} from "react";
import {GoogleMap, withGoogleMap} from "react-google-maps";
import DrawingManager from "react-google-maps/lib/components/drawing/DrawingManager";

const DrawingExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={15}
        defaultCenter={new google.maps.LatLng(47.646935, -122.303763)}
    >
        <DrawingManager
            defaultDrawingMode={google.maps.drawing.OverlayType.CIRCLE}
            defaultOptions={{
                drawingControl: true,
                drawingControlOptions: {
                    position: google.maps.ControlPosition.TOP_CENTER,
                    drawingModes: [
                        google.maps.drawing.OverlayType.CIRCLE,
                        google.maps.drawing.OverlayType.POLYGON,
                        google.maps.drawing.OverlayType.POLYLINE,
                        google.maps.drawing.OverlayType.RECTANGLE,
                    ],
                },
                circleOptions: {
                    fillColor: '#ff0000',
                    fillOpacity: 0.2,
                    strokeWeight: 3,
                    clickable: false,
                    editable: true,
                    zIndex: 1,
                },
                rectangleOptions: {
                    fillColor: '#ff0000',
                    fillOpacity: 0.2,
                    strokeWeight: 3,
                    clickable: false,
                    editable: true,
                    zIndex: 1,
                },
            }}
        />
    </GoogleMap>
));
export default class DrawingView extends Component {

    render() {
        return (
            <DrawingExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
            />
        );
    }
}