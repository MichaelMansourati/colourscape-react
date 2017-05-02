import React, {Component} from 'react';
import ColorSearch from './ColorSearch.jsx';

class PlaceSearch extends Component {
  render() {


    return(
      <div className="ps-cont">
        <form className="ps-form">
          <input type="text" onKeyPress={this.props.search} className="ps-searchbar" placeholder="e.g. Trinity Bellwoods"></input>
          <ColorSearch disableColors={this.props.disableColors} colorSelect={this.props.colorSelect}/>
        </form>
      </div>
    )
  }
}
export default PlaceSearch;