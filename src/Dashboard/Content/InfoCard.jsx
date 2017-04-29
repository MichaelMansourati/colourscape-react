import React, {Component} from 'react';

class InfoCard extends Component {
  render() {
    return(

      <div className="infoCard">
        <img src={this.props.img}/>
        <div className="info-cont">
          <p className="photographer">{this.props.photog}</p>
          <p className="Neighbourhood">{this.props.area}</p>
          <p className="city">{this.props.locality}</p>
          <p className="views">(this.props.views}</p>
        </div>
      </div>
    )
  }
}