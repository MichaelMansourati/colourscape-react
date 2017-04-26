import React, {Component} from 'react';
import UpperSpace         from './Spaces/UpperSpace.jsx';
import MainSpace          from './Spaces/MainSpace.jsx';


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
      }
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


    for (let colour in this.state.colourSelect) {
      if (this.state.colourSelect[colour] == true) {
        trueColours.push(colour);
      } else {
        falseColours.push(colour);
      }
    }
    if (trueColours.length >= 4) {
      for (let colour in falseColours) {
        document.getElementsByClassName(`cb-${colour}`).disabled = true;
      }
    }
    console.log(trueColours, falseColours);
  }



  render() {
    return (
      <div>
        <UpperSpace palette={this.state.colourPalette} colourSelect={this.handleColourSelect} />
        <MainSpace />
      </div>
    );
  }
}
export default App;
