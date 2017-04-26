import React, {Component} from 'react';

class PlaceSearch extends Component {
  render() {
    return(
      <div className="ps-cont">
        <form className="ps-form">
          <input type="text" onKeyPress={this.props.enterPlace} className="ps-searchbar" placeholder="e.g. Trinity Bellwoods"></input>
          <div className="colourbox-cont">
            <input type="checkbox" onChange={this.props.colourSelect} name="red" className="colourbox cb-red"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="orange" className="colourbox cb-orange"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="yellow" className="colourbox cb-yellow"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="green" className="colourbox cb-green"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="blue" className="colourbox cb-blue"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="purple" className="colourbox cb-purple"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="black" className="colourbox cb-black"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="brown" className="colourbox cb-brown"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="grey" className="colourbox cb-grey"/>
            <input type="checkbox" onChange={this.props.colourSelect} name="white" className="colourbox cb-white"/>
          </div>
        </form>
      </div>
    )
  }
}
export default PlaceSearch;