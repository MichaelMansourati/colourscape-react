import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

class Gmap extends Component {

  static defaultProps = {
    center: {lat: 43.65, lng: -79.38},
    zoom: 13
  };

  render() {
    const infoArr = this.props.infoContent
    return(
      <div className="gmap-cont">
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
        {
          infoArr.map((i) => {
            if (this.props.hIC == infoArr.indexOf(i)) {
              console.log('found the icon')
              return(
                <div key={infoArr.indexOf(i)} lat={i.lat} lng={i.lon} >
                  <i className="fa fa-camera-retro fa-3x" aria-hidden="true"></i>
                </div>
              )
            } else {
              return(
                <div key={infoArr.indexOf(i)} lat={i.lat} lng={i.lon} >
                  <i className="fa fa-camera-retro" aria-hidden="true"></i>
                </div>
              )
            }

          })
        }
        </GoogleMapReact>
      </div>
    )
  }
}
export default Gmap;


