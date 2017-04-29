import React, {Component} from 'react';

class InfoCard extends Component {
  render() {
    return(
      <div>
        <div className="infoCard">
          <img src="http://i.imgur.com/a9cB36B.jpg"/>
          <div className="info-cont">
            <p className="photographer">Johnny Bobonny</p>
            <p className="Neighbourhood">Neighborino-hoodbooboo</p>
            <p className="city">Toronto</p>
            <p className="views">a gorillion views</p>
          </div>
        </div>
        <div className="infoCard">
          <img src="http://i.imgur.com/55X3xEe.jpg"/>
          <div className="info-cont">
            <p className="photographer">Johnny Bobonny</p>
            <p className="Neighbourhood">Neighborino-hoodbooboo</p>
            <p className="city">Toronto</p>
            <p className="views">a gorillion views</p>
          </div>
        </div>
        <div className="infoCard">
          <img src="http://i.imgur.com/a9cB36B.jpg"/>
          <div className="info-cont">
            <p className="photographer">Johnny Bobonny</p>
            <p className="Neighbourhood">Neighborino-hoodbooboo</p>
            <p className="city">Toronto</p>
            <p className="views">a gorillion views</p>
          </div>
        </div>
      </div>
    )
  }
}
export default InfoCard;