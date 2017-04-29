import React, {Component} from 'react';
import TopRow from './Content/TopRow.jsx';
import BottomRow from './Content/BottomRow.jsx';

class Content extends Component {
  render() {
    var top = []
    var bottom = []
    var counter = 0
    var imgData = this.props.imgData
    for (var data in imgData){
      if (counter % 2 == 0 ){
        bottom.push(imgData[data])
      }else{
        top.push(imgData[data])
      }
      counter ++
    }
    return(

      //going to create separate arrays to send to top and bottom in content

      <div className="ms-cont">
        <TopRow arr={top} />
        <BottomRow arr={bottom}/>
      </div>
    );
  }
}
export default Content;