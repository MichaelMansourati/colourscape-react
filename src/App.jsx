import React, {Component} from 'react';
import Navbar from './Landing/Navbar.jsx';
import Content from './Landing/Content.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

/*
 note to self: img information needs to be restyled
 in consideration of narrow images.
...consider fucking with vw????? may not be enough
*/

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
      disableColors: {},
      locations: {
        place1: {lat: 43.639429, lon: -79.412441},
        place2: {lat: 43.639429, lon: -79.412441},
        place3: {lat: 43.639429, lon: -79.412441},
        place4: {lat: 43.637383, lon: -79.424779}
      }
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

  //<Content />

  render() {
    return (
      <div>
        <Navbar palette={this.state.colorPalette} colorSelect={this.handleColorSelect} disableColors={this.state.disableColors} />
        <Dashboard />
      </div>
    );
  }
}
export default App;
