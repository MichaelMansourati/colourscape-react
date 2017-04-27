import React, {Component} from 'react';
import Card from './Card.jsx';

class BottomRow extends Component {
  render() {
    var arr = this.props.arr
    return(
      <div className="br-cont">
        {
          arr.map((i) => {
            var c1 = `rgb(${i.c1.red}, ${i.c1.green}, ${i.c1.blue})`
            var c2 = `rgb(${i.c2.red}, ${i.c2.green}, ${i.c2.blue})`
            var c3 = `rgb(${i.c3.red}, ${i.c3.green}, ${i.c3.blue})`
            var c4 = `rgb(${i.c4.red}, ${i.c4.green}, ${i.c4.blue})`
            var colArr = [c1, c2, c3, c4]
            return ( <Card url={i.url} key={arr.indexOf(i)} colors = {colArr} photographer={i.photog}/> )
          })
        }
      </div>
    )
  }
}
export default BottomRow;