import React, {Component} from 'react';
import DynamicTitle from './UpperSpace/DynamicTitle.jsx'
import PlaceSearch from './UpperSpace/PlaceSearch.jsx'

class UpperSpace extends Component {
  render() {
    return (
      <div className="us-cont">
        <DynamicTitle palette={this.props.palette} />
        <PlaceSearch />
      </div>
    )
  }
}
export default UpperSpace;