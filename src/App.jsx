import React, {Component} from 'react';
import UpperSpace from './Spaces/UpperSpace.jsx';
import MainSpace from './Spaces/MainSpace.jsx';
import LowerSpace from './Spaces/LowerSpace.jsx'



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
      colourSelect: []
    }
    this.handleColourSelect = this.handleColourSelect.bind(this);
  }

  handleColourSelect(event) {
    const checkedColour = event.target.name
    let selectedColours = this.state.colourSelect.slice();
    selectedColours.push(checkedColour);

    this.setState({colourSelect: selectedColours});
    console.log('selectedColours: ', selectedColours);
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
