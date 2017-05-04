import React, {Component} from 'react';

class Suggests extends Component {
  render() {
    return(
      <div className="suggests-cont">
        <span className="suggestion"><i class="fa fa-compass" aria-hidden="true"></i> E X P L O R E</span>
        <div className="circle-row">
          <div className="circle circle-1">
            <div className="centering-div">
                <span className="place-to-go">downtown<br/>toronto</span>
            </div>
          </div>
          <div className="circle circle-2">
            <div className="centering-div">
              <span className="place-to-go">cabbagetown</span>
            </div>
          </div>
          <div className="circle circle-3">
            <div className="centering-div">
              <span className="place-to-go">bloor<br/>yorkville</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Suggests;