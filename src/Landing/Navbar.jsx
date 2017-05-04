import React, {Component} from 'react';
import DynamicTitle from './Navbar/DynamicTitle.jsx';
import PlaceSearch from './Navbar/PlaceSearch.jsx';
import Login from './Navbar/Login.jsx';

class Navbar extends Component {

   placeSel = () => {
      if(this.props.selectedScreen == 'landing'){
        return(
            <PlaceSearch  search={this.props.placeSearch} colorSelect={this.props.colorSelect} disableColors={this.props.disableColors}/>
        )
      }
  }


  render() {
    return (
      <div className="us-cont">
        <DynamicTitle palette={this.props.palette} navFrom={this.props.navFrom}/>
        { this.placeSel() }
        <Login user={this.props.user} navigateTo={this.props.navigateTo}/>
      </div>
    )
  }
}
export default Navbar;