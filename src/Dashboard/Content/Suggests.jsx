import React, {Component} from 'react';

class Suggests extends Component {
  render() {
    return(
      <div className="suggests-cont">
        <span className="suggestion">Popular destinations around you:</span>
        <div className="circle-row">
          <div className="circle circle-1">
            <div className="centering-div">
                <span className="place-to-go">Distillery District</span>
            </div>
          </div>
          <div className="circle circle-2">
            <div className="centering-div">
              <span className="place-to-go">Trinity Bellwoods Park</span>
            </div>
          </div>
          <div className="circle circle-3">
            <div className="centering-div">
              <span className="place-to-go">Royal Ontario Museum</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Suggests;