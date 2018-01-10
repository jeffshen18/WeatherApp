import React, { Component } from 'react';

class GoogleMap extends Component {

  componentDidMount() {
    //find this HTMl element on screen and render an embedded google map into it
    new google.maps.Map(this.refs.map, {
      //options object, zoom gives good glimpse of city
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // this.refs.map would give direct reference to this html element
    return <div ref="map" />;
  }

}

export default GoogleMap;
