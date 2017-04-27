import React, {Component} from 'react';
// import TopRow from './MainSpace/TopRow.jsx';
// import BottomRow from './MainSpace/BottomRow.jsx';
import imgData from './imgdata.js';

// class Content extends Component {
//   render() {
//     var top = []
//     var bottom = []
//     var counter = 0
//     for (var data in imgData){
//       if (counter % 2 == 0 ){
//         bottom.push(imgData[data])
//       }else{
//         top.push(imgData[data])
//       }
//       counter ++
//     }
//     return(

//       //going to create separate arrays to send to top and bottom in content

//       <div className="ms-cont">
//         <TopRow arr={top} />
//         <BottomRow arr={bottom}/>
//       </div>
//     );

import TopRow from './Content/TopRow.jsx';
import BottomRow from './Content/BottomRow.jsx';

class Content extends Component {
  render() {
    var top = []
    var bottom = []
    var counter = 0
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