//adding card counter logic to alternating passing image into top row or bottom row

import React, {Component} from 'react';

class Card extends Component {

  render() {
    var c = this.props.colors
    let place = this.props.area
    if(place == "")
      place = "Unknown"
    return(
      <div className="card">

        <img className="the-goods" src={this.props.url}/>
        <div className="tag-space">
          <span className="location">{place}</span>
          <div className="palette-container">
            <div className="color" style={{backgroundColor: c[0]}}></div>
            <div className="color" style={{backgroundColor: c[1]}}></div>
            <div className="color" style={{backgroundColor: c[2]}}></div>
            <div className="color" style={{backgroundColor: c[3]}}></div>
          </div>
          <i className="fa fa-heart-o" onClick={this.props.clickLike} id={this.props.id}></i>
        </div>
      </div>
    )
  }
}
export default Card;