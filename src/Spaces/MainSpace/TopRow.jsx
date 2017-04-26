import React, {Component} from 'react';

class TopRow extends Component {
  render() {
    return(
      <div className="tr-cont">
        <div className="card">

          <img className="the-goods" src="https://c1.staticflickr.com/6/5271/7078647675_55eb339b8c_b.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
          <h2 className="author-space">
            <span className="author-name">Location</span>
          </h2>
        </div>
        <div className="card">
          <img className="the-goods" src="https://www.hollyburn.com/drive/uploads/2016/11/Downtown-Toronto-Gooderham-Building-600x338.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
          <h2 className="author-space">
            <span className="author-name">Location</span>
          </h2>
        </div>
        <div className="card">
          <h2 className="author-space">
            <span className="author-name">Location</span>
          </h2>
          <img className="the-goods" src="https://static1.squarespace.com/static/566f049acbced6eb6d74a790/t/5677333d4bf118c80a38b033/1450652480045/image.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
        </div>
        <div className="card">
          <img className="the-goods" src="http://static.natgeotraveler.nl/uploads/media/image/canada-i-toronto.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
          <h2 className="author-space">
            <span className="author-name">Location</span>
          </h2>
        </div>
        <div className="card">
          <h2 className="author-space">
            <span className="author-name">Location</span>
          </h2>
          <img className="the-goods" src="http://2.bp.blogspot.com/_8ZyO7qgEpUk/TGQFHewukPI/AAAAAAAAE-8/7JSP6MoRaB8/s1600/flatironDSC_8087.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
        </div>
        <div className="card">
          <h2 className="author-space">
            <span className="author-name">Location</span>
          </h2>
          <img className="the-goods" src="http://www.theruecollective.com/wp-content/uploads/2015/10/the-rue-collective-toronto-city-photogrpahy-10.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
        </div>
        <div className="card" onMouseEnter={this.props.onImgME} onMouseLeave={this.props.onImgML} >
          <h2 className="author-space">
            <span className="author-name">Author Authorially</span>
          </h2>
          <img className="the-goods" src="http://www.hickerphoto.com/images/1440/gooderham-building_36946.jpg"/>
          <div className="palette-container">
            <div className="colour colour-1"></div>
            <div className="colour colour-2"></div>
            <div className="colour colour-3"></div>
            <div className="colour colour-4"></div>
          </div>
        </div>
      </div>
    )
  }
}
export default TopRow;