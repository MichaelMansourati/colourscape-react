import React, {Component} from 'react';

class PlaceSearch extends Component {
  render() {
    return(
      <div className="ps-cont">
        <form>
          <input type="text" className="ps-searchbar" placeholder="e.g. Distillery District"></input>
        </form>
      </div>
    )
  }
}
export default PlaceSearch;