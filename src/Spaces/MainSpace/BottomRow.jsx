import React, {Component} from 'react';

class BottomRow extends Component {
  render() {
    return(
      <div className="br-cont">
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <div className="author-space">
            <span className="author-name">Author Authorially</span>
          </div>
          <img className="the-goods" src="https://s-media-cache-ak0.pinimg.com/originals/6c/a4/39/6ca439150df53bd18338a45a995dc4df.jpg"/>
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
          <img className="the-goods" src="http://urbantoronto.ca/sites/default/files/imagecache/display-slideshow/images/articles/2014/12/14878/14878-42366.jpg"/>
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
          <img className="the-goods" src="http://4.bp.blogspot.com/_8ZyO7qgEpUk/TGQE49COeaI/AAAAAAAAE-s/LgvdO6w8ZTE/s1600/flatiron100_8790.jpg"/>
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
          <img className="the-goods" src="https://c1.staticflickr.com/1/48/154812219_6059016c74_b.jpg"/>
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
          <img className="the-goods" src="http://beabroda.com/wp-content/uploads/2016/05/0toronto-2400x631.png"/>
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