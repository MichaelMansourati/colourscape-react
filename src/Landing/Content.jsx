import React, {Component} from 'react';
import TopRow from './MainSpace/TopRow.jsx';
import BottomRow from './MainSpace/BottomRow.jsx';

class Content extends Component {
  render() {
    return(
      <div className="ms-cont">
        <TopRow />
        <BottomRow />
      </div>
    )
  }
}
export default Content;