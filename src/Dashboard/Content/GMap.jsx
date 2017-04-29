import React, {Component} from 'react';

class Gmap extends Component {
  // fetchPlaces: function(mapProps, map) {
  //   const {google} = this.props;
  //   const service = new google.maps.places.PlacesService(map);
  //   // ...
  // },
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return(
      <div className="gmap-cont">
        <Map google={this.props.google} onReady={this.fetchPlaces} visible={false}>
          <Listing places={this.state.places} />
        </Map>
      </div>
    )
  }
}
export default Gmap;
// export default GoogleApiComponent({
//   apiKey: AIzaSyBcaJilXx4arOi8OcEAe5BFfwWhALGmNW8
// })(Container)

