import React, {Component} from 'react';
import Card from './Card.jsx';

class BottomRow extends Component {
  render() {
    var arr = this.props.arr
    return(
      <div className="br-cont">
        {
          arr.map((i) => {
            var nghbrhd = i.neighbourhood
            return ( <Card url={i.url} key={arr.indexOf(i)} colors = {i.colArr} area={nghbrhd}/> )
          })
        }
      </div>
    )
  }
}
export default BottomRow;