import React, {Component} from 'react';
import DynamicTitle from './UpperSpace/DynamicTitle.jsx'
import PlaceSearch from './UpperSpace/PlaceSearch.jsx'

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