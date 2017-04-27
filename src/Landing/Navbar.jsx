import React, {Component} from 'react';
import DynamicTitle from './Navbar/DynamicTitle.jsx'
import PlaceSearch from './Navbar/PlaceSearch.jsx'

class Navbar extends Component {
  render() {
    return (
      <div className="us-cont">
        <DynamicTitle palette={this.props.palette} />
        <PlaceSearch colourSelect={this.props.colourSelect} disableColours={this.props.disableColours} />
      </div>
    )
  }
}
export default Navbar;