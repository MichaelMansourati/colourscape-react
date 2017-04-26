import React, {Component} from 'react';

class PlaceSearch extends Component {
  render() {
    const disabled = this.props.disableColours
    const bool = {
      red: disabled.red,
      orange: disabled.orange,
      yellow: disabled.yellow,
      green: disabled.green,
      blue: disabled.blue,
      purple: disabled.purple,
      brown: disabled.brown,
      black: disabled.black,
      grey: disabled.grey,
      white: disabled.white
    }

    return(
      <div className="ps-cont">
        <form className="ps-form">
          <input type="text" onKeyPress={this.props.enterPlace} className="ps-searchbar" placeholder="e.g. Trinity Bellwoods"></input>
          <div className="colourbox-cont">
            <input type="checkbox" disabled={bool.red} onChange={this.props.colourSelect} name="red" className="colourbox cb-red"/>
            <input type="checkbox" disabled={bool.orange} onChange={this.props.colourSelect} name="orange" className="colourbox cb-orange"/>
            <input type="checkbox" disabled={bool.yellow} onChange={this.props.colourSelect} name="yellow" className="colourbox cb-yellow"/>
            <input type="checkbox" disabled={bool.green} onChange={this.props.colourSelect} name="green" className="colourbox cb-green"/>
            <input type="checkbox" disabled={bool.blue} onChange={this.props.colourSelect} name="blue" className="colourbox cb-blue"/>
            <input type="checkbox" disabled={bool.purple} onChange={this.props.colourSelect} name="purple" className="colourbox cb-purple"/>
            <input type="checkbox" disabled={bool.brown} onChange={this.props.colourSelect} name="brown" className="colourbox cb-brown"/>
            <input type="checkbox" disabled={bool.black} onChange={this.props.colourSelect} name="black" className="colourbox cb-black"/>
            <input type="checkbox" disabled={bool.grey} onChange={this.props.colourSelect} name="grey" className="colourbox cb-grey"/>
            <input type="checkbox" disabled={bool.white} onChange={this.props.colourSelect} name="white" className="colourbox cb-white"/>
          </div>
        </form>
      </div>
    )
  }
}
export default PlaceSearch;