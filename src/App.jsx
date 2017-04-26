import React, {Component} from 'react';
import Navbar from './Landing/Navbar.jsx';
import Content from './Landing/Content.jsx';


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
  }


  render() {
    return (
      <div>
        <Navbar palette={this.state.colorPalette} />
        <Content onImgME={this.handleImageMouseEnter} onImgML={this.handleImageMouseLeave}/>
      </div>
    );
  }
}
export default App;
