import React, {Component} from 'react';
import Navbar             from './Landing/Navbar.jsx';
import Content            from './Landing/Content.jsx';


class App extends Component {

  constructor() {
    super();
    this.state = {
      colourPalette: {
        colour1: '#e9e2d0',
        colour2: '#ea9085',
        colour3: '#d45d79',
        colour4: '#6e5773'
      },
      colourSelect: {
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
      disableColours: {}
    }
    this.handleColourSelect = this.handleColourSelect.bind(this);
  }


  handleColourSelect(event) {
    const checkedColour = event.target.name;
    const colourBool    = this.state.colourSelect[checkedColour];
    let trueColours = [];
    let falseColours = [];

    let newColourObj = Object.assign({}, this.state.colourSelect);
    newColourObj[checkedColour] = !newColourObj[checkedColour];

    this.setState({colourSelect: newColourObj});


    for (let colour in newColourObj) {
      if (newColourObj[colour] == true) {
        trueColours.push(colour);
      } else {
        falseColours.push(colour);
      }
    }

    if (trueColours.length == 4) {
      // console.log('at colour max');
      let newDisabledColourObj = Object.assign({}, newColourObj);
      for (let colour in newDisabledColourObj) {
        newDisabledColourObj[colour] = !newDisabledColourObj[colour];
      }
      this.setState({disableColours: newDisabledColourObj});
    } else {
      this.setState({disableColours: {}});
    }
    // console.log("trueColours: ", trueColours, "falseColours: ", falseColours);
  }



  render() {
    return (
      <div>
        <Navbar palette={this.state.colourPalette} colourSelect={this.handleColourSelect} disableColours={this.state.disableColours} />
        <Content />
      </div>
    );
  }
}
export default App;
