//adding card counter logic to alternating passing image into top row or bottom row

import React, {Component} from 'react';

class Card extends Component {

  render() {
    var c = this.props.colors
    let place = this.props.area
    console.log(place)
    if(place == "")
      place = "Unknown"
    return(
      <div className="card">
        <img className="the-goods" src={this.props.url}/>
        <div className="palette-container">
          <div className="color color-1" style={{backgroundColor: c[0]}}></div>
          <div className="color" style={{backgroundColor: c[1]}}></div>
          <div className="color" style={{backgroundColor: c[2]}}></div>
          <div className="color color-4" style={{backgroundColor: c[3]}}></div>
          <footer><i className="fa fa-heart-o fa-2x"></i></footer>
        </div>
        <div className="author-space">
          <span className="author-name">{place}</span>
        </div>
      </div>
    )
  }
}
export default Card;