import React, {Component} from 'react';

class InfoCard extends Component {
  render() {
    return(

      <div className="infoCard" onMouseEnter={this.props.InfoCardME} id={this.props.id} onMouseLeave={this.props.InfoCardML}>
        <img src={this.props.image}/>
        <div className="info-cont">
          <p className="photographer">

            <i className="photgImg fa fa-camera-retro" aria-hidden="true"></i>
          <div className="photgInfo">
             {this.props.photog}
          </div></p>
          <p className="Location">

          <i className="photgImg fa fa-thumb-tack" aria-hidden="true"> </i>
          <div className="photgInfo">{this.props.area}, {this.props.city}
          </div>
          </p>
          <p className="views">
          <i className="photgImg fa fa-eye" aria-hidden="true"></i>
          <div className="photgInfo">{this.props.views}
          </div></p>
        </div>
      </div>
    )
  }
}
export default InfoCard;