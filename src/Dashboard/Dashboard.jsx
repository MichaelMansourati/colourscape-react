import React, {Component} from 'react';
import InfoCard from './Content/InfoCard.jsx';
import GMap from './Content/GMap.jsx';
import Suggests from './Content/Suggests.jsx';


class Dashboard extends Component {
  render() {
    return(
      <div className="db-cont">
        <div className="content-cont">
          <InfoCard />
        </div>
        <div className="sidebar">
          <GMap />
          <Suggests />
        </div>
      </div>
    )
  }
}
export default Dashboard
