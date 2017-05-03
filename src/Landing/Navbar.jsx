import React, {Component} from 'react';
import DynamicTitle from './Navbar/DynamicTitle.jsx';
import PlaceSearch from './Navbar/PlaceSearch.jsx';
import Login from './Navbar/Login.jsx';

class Navbar extends Component {
  render() {
    return (
      <div className="us-cont">
        <DynamicTitle palette={this.props.palette} />
        <PlaceSearch  search={this.props.placeSearch} colorSelect={this.props.colorSelect} disableColors={this.props.disableColors}/>
        <Login user={this.props.user} />
      </div>
    )
  }
}
export default Navbar;