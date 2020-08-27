import React from 'react'
import {Map, TileLayer, Marker, Polyline} from 'react-leaflet'

const renderLines = (data) => {
    var i = 0;
    var j = 1;
    var len = data.length;
    var lines = [];
    while (j < len) {
        lines.push(<Polyline key positions={[
              [data[i].lat, data[i].long], [data[j].lat, data[j].long],
            ]} color={'red'} />)
        i++;
        j++;
    }
    return lines;
}

const MapComponent = (props) => {

    var lines = renderLines(props.data);

    return (
        <Map 
            style={{width:"100%", height:"50vh"}}
            center={[48.135124, 11.581981]}
            zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {props.data.map((marker) => <Marker key={marker.id} position={[marker.lat, marker.long]}/>)}
            {lines}
        </Map>
    )
}

export default MapComponent