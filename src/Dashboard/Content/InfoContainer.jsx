import React, {Component} from 'react';
import InfoCard from './InfoCard.jsx';

class InfoContainer extends Component {
  render() {
    const infoArr = this.props.infoContent;
    return(
      <div>
        {
          infoArr.map((i) => {
            if (i.photog == '') {
              i.photog = 'n/a';
            }
            return(
              <InfoCard
              key={infoArr.indexOf(i)}
              id={infoArr.indexOf(i)}
              image={i.url}
              photog={i.photog}
              area={i.neighbourhood}
              city={i.locality}
              views={i.views}
              InfoCardME={this.props.InfoCardME}
              InfoCardML={this.props.InfoCardML}
              />
            )
          })
        }
      </div>
    )
  }
}
export default InfoContainer;