//adding card counter logic to alternating passing image into top row or bottom row

import React, {Component} from 'react';

class Card extends Component {
  render() {
    return(
      <div className="card">
        <img className="the-goods" src="https://s-media-cache-ak0.pinimg.com/originals/6c/a4/39/6ca439150df53bd18338a45a995dc4df.jpg"/>
        <div className="palette-container">
          <div className="color color-1" ></div>
          <div className="color color-2"></div>
          <div className="color color-3"></div>
          <div className="color color-4"></div>
          <footer><i className="fa fa-heart-o"></i></footer>
        </div>
        <div className="author-space">
          <span className="author-name">Author Authorially</span>
        </div>
      </div>
    )
  }
}
export default Card;