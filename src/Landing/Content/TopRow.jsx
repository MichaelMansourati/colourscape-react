import React, {Component} from 'react';
import Card from './Card.jsx';

class TopRow extends Component {
  render() {
    var arr = this.props.arr
    return(
      <div className="tr-cont">
       {
          arr.map((i) => {
            var nghbrhd = i.neighbourhood
            return ( <Card url={i.url} key={arr.indexOf(i)} colors = {i.colArr} area={nghbrhd} clickLike={this.props.clickLike} id={i.id}/> )
          })
        }
      </div>
    )
  }
}
export default TopRow;