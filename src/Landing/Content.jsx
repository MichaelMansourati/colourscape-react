import React, {Component} from 'react';
import TopRow from './Content/TopRow.jsx';
import BottomRow from './Content/BottomRow.jsx';

class Content extends Component {
  render() {
    var top = []
    var bottom = []
    var counter = 0
    var imgData = this.props.imgData
    for (var i in imgData){

      var c1 = `rgb(${imgData[i].red1}, ${imgData[i].green1}, ${imgData[i].blue1})`
      var c2 = `rgb(${imgData[i].red2}, ${imgData[i].green2}, ${imgData[i].blue2})`
      var c3 = `rgb(${imgData[i].red3}, ${imgData[i].green3}, ${imgData[i].blue3})`
      var c4 = `rgb(${imgData[i].red4}, ${imgData[i].green4}, ${imgData[i].blue4})`
      var colArr = [c1, c2, c3, c4]
      imgData[i].colArr = colArr
      console.log(imgData[i])


      if (counter % 2 == 1 ){
        bottom.push(imgData[i])
      }else{
        top.push(imgData[i])
      }
      counter ++

    }
    return(

      //going to create separate arrays to send to top and bottom in content

      <div className="ms-cont">
        <TopRow arr={top} clickLike={this.props.clickLike}/>
        <BottomRow arr={bottom} clickLike={this.props.clickLike}/>
      </div>
    );
  }
}
export default Content;