import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Gmap extends Component {

  static defaultProps = {
    center: {lat: 43.65, lng: -79.38},
    zoom: 13
  };


  render() {
    return(
      <div className="gmap-cont">
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <div className="map-marker" lat={43.65} lng={-79.38}  text={'Kreyser Avrora'}>
            <i className="fa fa-camera-retro 4x" aria-hidden="true"></i>
          </div>
        </GoogleMapReact>
      </div>
    )
  }
}
export default Gmap;


