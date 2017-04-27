import React, {Component} from 'react';
import TopRow from './Content/TopRow.jsx';
import BottomRow from './Content/BottomRow.jsx';

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