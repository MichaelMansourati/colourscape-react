import React, {Component} from 'react';

class InfoCard extends Component {
  render() {
    return(

      <div className="infoCard" onMouseEnter={this.props.InfoCardME} id={this.props.id} onMouseLeave={this.props.InfoCardML}>
        <img src={this.props.image}/>
        <div className="info-cont">
          <p className="photographer"><i className="fa fa-camera-retro" aria-hidden="true"></i> {this.props.photog}</p>
          <p className="Location"><i className="fa fa-thumb-tack" aria-hidden="true"> </i> {this.props.area}, {this.props.city}</p>
          <p className="views"><i className="fa fa-eye" aria-hidden="true"></i> {this.props.views}</p>
        </div>
      </div>
    )
  }
}
export default InfoCard;