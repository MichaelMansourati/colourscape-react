import React, {Component} from 'react';
import UpperSpace from './Spaces/UpperSpace.jsx';
import MainSpace from './Spaces/MainSpace.jsx';
import LowerSpace from './Spaces/LowerSpace.jsx'

class App extends Component {

  constructor() {
    super();
    this.state = {
      colorPalette: {
        color1: '#e9e2d0',
        color2: '#ea9085',
        color3: '#d45d79',
        color4: '#6e5773'
      }
    }
    this.handleImageMouseEnter = this.handleImageMouseEnter.bind(this);
    this.handleImageMouseLeave = this.handleImageMouseLeave.bind(this);
  }

  handleImageMouseEnter(event) {
    console.log('senpai noticed my mouse enter', event.currentTarget.children[1]);
    // get color of palette of image and
  }

  handleImageMouseLeave(event) {
    console.log('senpai noticed my mouse leave')
  }

  render() {
    return (
      <div>
        <UpperSpace palette={this.state.colorPalette} />
        <MainSpace onImgME={this.handleImageMouseEnter} onImgML={this.handleImageMouseLeave}/>
        <LowerSpace />
      </div>
    );
  }
}
export default App;
