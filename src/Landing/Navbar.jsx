import React, {Component} from 'react';
import DynamicTitle from './UpperSpace/DynamicTitle.jsx'
import PlaceSearch from './UpperSpace/PlaceSearch.jsx'

class Navbar extends Component {
  render() {
    return (
      <div className="us-cont">
        <DynamicTitle palette={this.props.palette} />
        <PlaceSearch colorSelect={this.props.colorSelect} disableColors={this.props.disableColors} />
      </div>
    )
  }
}
export default Navbar;