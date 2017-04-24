import React, {Component} from 'react';

class BottomRow extends Component {
  render() {
    return(
      <div className="br-cont">
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="https://cdn.theculturetrip.com/wp-content/uploads/2016/04/vassily_kandinsky_1939_-_composition_10.jpg"/>
          <div className="palette-container">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
        </div>
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="http://www.pablopicasso.org/images/paintings/avignon.jpg"/>
          <div className="palette-container">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
        </div>
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="https://cdn.theculturetrip.com/wp-content/uploads/2016/04/vassily_kandinsky_1939_-_composition_10.jpg"/>
          <div className="palette-container">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
        </div>
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="http://www.pablopicasso.org/images/paintings/avignon.jpg"/>
          <div className="palette-container">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
        </div>
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="https://cdn.theculturetrip.com/wp-content/uploads/2016/04/vassily_kandinsky_1939_-_composition_10.jpg"/>
          <div className="palette-container">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
        </div>
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="http://www.pablopicasso.org/images/paintings/avignon.jpg"/>
          <div className="palette-container">
            <div className="color color-1"></div>
            <div className="color color-2"></div>
            <div className="color color-3"></div>
            <div className="color color-4"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default BottomRow;