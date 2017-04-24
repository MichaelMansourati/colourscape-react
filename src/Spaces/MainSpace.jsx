import React, {Component} from 'react';
import TopRow from './MainSpace/TopRow.jsx';
import BottomRow from './MainSpace/BottomRow.jsx';

class MainSpace extends Component {
  render() {
    return(
      <div className="ms-cont">
        <TopRow onImgME={this.props.onImgME} onImgML={this.props.onImgML} />
        <BottomRow onImgME={this.props.onImgME} onImgML={this.props.onImgML} />
      </div>
    )
  }
}
export default MainSpace;