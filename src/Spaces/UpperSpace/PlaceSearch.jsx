import React, {Component} from 'react';

class PlaceSearch extends Component {
  render() {
    return(
      <div className="ps-cont">
        <form className="ps-form">
          <input type="text" className="ps-searchbar" placeholder="e.g. Trinity Bellwoods"></input>
          <div className="colorbox-cont">
            <input type="checkbox" className="colorbox cb-red"/>
            <input type="checkbox" className="colorbox cb-orange"/>
            <input type="checkbox" className="colorbox cb-yellow"/>
            <input type="checkbox" className="colorbox cb-green"/>
            <input type="checkbox" className="colorbox cb-blue"/>
            <input type="checkbox" className="colorbox cb-purple"/>
            <input type="checkbox" className="colorbox cb-white"/>
            <input type="checkbox" className="colorbox cb-grey"/>
            <input type="checkbox" className="colorbox cb-black"/>
          </div>
        </form>
      </div>
    )
  }
}
export default PlaceSearch;