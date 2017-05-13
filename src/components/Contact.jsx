/* global google */
import _ from "lodash";

import {
  default as React,
  Component,
} from "react";

import {Button} from "reactstrap"
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={19}
    defaultCenter={{ lat: 24.793432, lng: 120.994349 }}
    onClick={props.onMapClick}
  >
    <InfoWindow defaultPosition={props.center}>
      <div>
        {props.content_row1}
        <br/>
        {props.content_row2}
      </div>
    </InfoWindow>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>

));

var lat_g = 0,lng_g = 0;

navigator.geolocation.getCurrentPosition(function(position) {
// called back asynchronously
 lat_g = position.coords.latitude;
 lng_g = position.coords.longitude;
});

export default class Contact extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      markers: [{
        position: {
          lat: 24.793432,
          lng: 120.994349,
        },
        key: `Taiwan`,
        defaultAnimation: 2,
      }],
      content_row1: `高菲鬆餅屋`,
      content_row2: `連絡電話:0930-131-019`,

      destination: null,
      origin: new google.maps.LatLng(lat_g, lng_g),
      destination: new google.maps.LatLng(24.793432, 120.994349),
    };

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleDirection = this.handleDirection.bind(this);
  }

  componentDidMount() {

    }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log(map.getZoom());
    }
  }
  handleDirection(){
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }
  render() {
    return (
      <div style={{height : "500px"}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
          onMapLoad={this.handleMapLoad}
          content_row1={this.state.content_row1}
          content_row2={this.state.content_row2}
          center={new google.maps.LatLng(24.7936,120.994349)}
          directions={this.state.directions}
        />
      <Button color="secondary" onClick={this.handleDirection}>導航</Button>
      </div>
    );
  }
}
