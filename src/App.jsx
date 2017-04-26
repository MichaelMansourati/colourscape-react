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
      },
      colorSelect: {
        red:    false,
        orange: false,
        yellow: false,
        green:  false,
        blue:   false,
        purple: false,
        brown:  false,
        black:  false,
        grey:   false,
        white:  false
      },
      disableColors: {}
    }
    this.handleColorSelect = this.handleColorSelect.bind(this);
  }


  handleColorSelect(event) {
    const checkedColor = event.target.name;
    const colorBool    = this.state.colorSelect[checkedColor];
    let trueColors = [];
    let falseColors = [];

    let newColorObj = Object.assign({}, this.state.colorSelect);
    newColorObj[checkedColor] = !newColorObj[checkedColor];

    this.setState({colorSelect: newColorObj});


    for (let color in newColorObj) {
      if (newColorObj[color] == true) {
        trueColors.push(color);
      } else {
        falseColors.push(color);
      }
    }

    if (trueColors.length == 4) {
      // console.log('at color max');
      let newDisabledColorObj = Object.assign({}, newColorObj);
      for (let color in newDisabledColorObj) {
        newDisabledColorObj[color] = !newDisabledColorObj[color];
      }
      this.setState({disableColors: newDisabledColorObj});
    } else {
      this.setState({disableColors: {}});
    }
    // console.log("trueColors: ", trueColors, "falseColors: ", falseColors);
  }



  render() {
    return (
      <div>
        <Navbar palette={this.state.colorPalette} colorSelect={this.handleColorSelect} disableColors={this.state.disableColors} />
        <Content />
      </div>
    );
  }
}
export default App;
