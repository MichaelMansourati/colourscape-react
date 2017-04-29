import React, {Component} from 'react';
import InfoCard from './InfoCard.jsx';

class InfoContainer extends Component {
  render() {
    const infoArr = this.props.infoContent;
    return(
      <div>
        {
          infoArr.map((i) => {
            console.log(i);
            const nghbrhd = i.neighbourhood;
            return(
              <InfoCard
              key={infoArr.indexOf(i)}
              image={i.url}
              photog={i.photog}
              lat={i.lat}
              lon={i.lon}
              area={i.neighbourhood}
              views={i.views}
              city={i.locality} />
            )
          })
        }
      </div>
    )
  }
}
export default InfoContainer;