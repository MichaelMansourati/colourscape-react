import React, {Component} from 'react';
import Navbar from './Landing/Navbar.jsx';
import Content from './Landing/Content.jsx';
import imgData from './Landing/imgdata.js';
import Dashboard from './Dashboard/Dashboard.jsx';


class App extends Component {

  constructor() {
    super();
    // Massage data from first call into string
    for(var i in imgData) {
      var c1 = `rgb(${imgData[i].c1.red}, ${imgData[i].c1.green}, ${imgData[i].c1.blue})`
      var c2 = `rgb(${imgData[i].c2.red}, ${imgData[i].c2.green}, ${imgData[i].c2.blue})`
      var c3 = `rgb(${imgData[i].c3.red}, ${imgData[i].c3.green}, ${imgData[i].c3.blue})`
      var c4 = `rgb(${imgData[i].c4.red}, ${imgData[i].c4.green}, ${imgData[i].c4.blue})`
      var colArr = [c1, c2, c3, c4]
      imgData[i].colArr = colArr
    }
    console.log(imgData)
    this.state = {
      colorPalette: {
        color1: 'rgb(255, 255, 255)',
        color2: 'rgb(255, 255, 255)',
        color3: 'rgb(255, 255, 255)',
        color4: 'rgb(255, 255, 255)'
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
      },
      imgData: imgData
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

    console.log(`True: ${trueColors}, False: ${falseColors}`)

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
    let colReqArr = []
    for(var t in trueColors){
      switch (trueColors[t]) {
        case "red":
            colReqArr.push({"r":255,"g": 0,"b": 0})
          break
        case "orange":
            colReqArr.push({"r":255,"g": 128,"b": 0})
          break
        case "yellow":
            colReqArr.push({"r":255,"g": 255,"b": 0})
          break
        case "green":
            colReqArr.push({"r":0,"g": 128,"b": 0})
          break
        case "blue":
            colReqArr.push({"r":0,"g": 0,"b": 255})
          break
        case "purple":
            colReqArr.push({"r":128,"g": 0,"b": 128})
          break
        case "brown":
            colReqArr.push({"r":136,"g": 84,"b": 24})
          break
        case "black":
            colReqArr.push({"r":0,"g": 0,"b": 0})
          break
        case "grey":
            colReqArr.push({"r":128,"g": 128,"b": 128})
          break
        case "white":
            colReqArr.push({"r":255,"g": 255,"b": 255})
          break
      }
    }
    console.log("trueColors: ", trueColors, "Request Array: ", colReqArr);
  }


  render() {
    // <Content imgData={this.state.imgData} />
        //
    return (
      <div>
        <Navbar palette={this.state.colorPalette} colorSelect={this.handleColorSelect} disableColors={this.state.disableColors} />
        <Dashboard />
      </div>
    );
  }
}
export default App;
