import React, {Component} from 'react';

class ColorSearch extends Component {
  render() {
    const disabled = this.props.disableColors
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
      <div className="colorbox-cont">
        <input type="checkbox" disabled={bool.red} onChange={this.props.colorSelect} name="red" className="colorbox cb-red"/>
        <input type="checkbox" disabled={bool.orange} onChange={this.props.colorSelect} name="orange" className="colorbox cb-orange"/>
        <input type="checkbox" disabled={bool.yellow} onChange={this.props.colorSelect} name="yellow" className="colorbox cb-yellow"/>
        <input type="checkbox" disabled={bool.green} onChange={this.props.colorSelect} name="green" className="colorbox cb-green"/>
        <input type="checkbox" disabled={bool.blue} onChange={this.props.colorSelect} name="blue" className="colorbox cb-blue"/>
        <input type="checkbox" disabled={bool.purple} onChange={this.props.colorSelect} name="purple" className="colorbox cb-purple"/>
        <input type="checkbox" disabled={bool.brown} onChange={this.props.colorSelect} name="brown" className="colorbox cb-brown"/>
        <input type="checkbox" disabled={bool.black} onChange={this.props.colorSelect} name="black" className="colorbox cb-black"/>
        <input type="checkbox" disabled={bool.grey} onChange={this.props.colorSelect} name="grey" className="colorbox cb-grey"/>
        <input type="checkbox" disabled={bool.white} onChange={this.props.colorSelect} name="white" className="colorbox cb-white"/>
      </div>
    )
  }
}
export default ColorSearch;
