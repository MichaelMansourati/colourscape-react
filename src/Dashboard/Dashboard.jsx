import React, {Component} from 'react';
import InfoContainer from './Content/InfoContainer.jsx';
import GMap from './Content/GMap.jsx';
import Suggests from './Content/Suggests.jsx';


class Dashboard extends Component {

  render() {
    return(
      <div className="db-cont">
        <div className="content-cont">
          <InfoContainer
          infoContent={this.props.infoContent}
          InfoCardML={this.props.InfoCardML}
          InfoCardME={this.props.InfoCardME}

          />
        </div>
        <div className="sidebar">
          <GMap infoContent={this.props.infoContent} hIC={this.props.hoveredInfoCard} />
        </div>
        <div className="suggests-bar">
          <Suggests />
        </div>
      </div>
    )
  }
}
export default Dashboard
