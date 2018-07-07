import React, {Component} from "react";
import {GoogleMap, KmlLayer, withGoogleMap} from "react-google-maps";

const KmlLayerExampleGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{lat: 41.876, lng: -87.624}}>
        <KmlLayer
            url="http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml"
            options={{preserveViewport: true}}
        />
    </GoogleMap>
));


export default class MapKmLayer extends Component {

    render() {
        return (
            <KmlLayerExampleGoogleMap
                containerElement={
                    <div className="embed-responsive embed-responsive-21by9"/>
                }
                mapElement={<div className="embed-responsive-item"/>}
            />
        );
    }
}