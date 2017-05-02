import React, {Component} from 'react';
import Navbar from './Landing/Navbar.jsx';
import Content from './Landing/Content.jsx';
import imgData from './Landing/imgdata.js';
import Dashboard from './Dashboard/Dashboard.jsx'
/*
 Michael:
 note to self: img information needs to be restyled
 in consideration of narrow images.
...consider fucking with vw????? may not be enough
*/

/*
  Suraj:
  After things get done, work on getting slashes to respond to colours selected, then work on something for <italics>hover</italics>

  Initial search query in ComponenetDidMount
  this

  User query being buildon component
*/
// let savePrevSt = {}
// let BASE = `http://localhost:8005`
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
    // console.log(imgData)
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
      imgData: imgData,
      queryParams: '',
      color:    false,
      location: false,
      loading:  false
    }
    this.handleColorSelect = this.handleColorSelect.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {

    let x = this.state
    console.log("shouldUpdate:", x.color || x.location)

    // If component is in the middle of a fetch, do not update componentDidUpdate

    return !this.state.loading

  }

  componentWillUpdate(nextProps, nextState) {
    this.setState({loading: true})
    fetch(`http://localhost:8005/`)
    .then((response) => {
      console.log( response )
      response.clone().json()
      .then((ans) => {
        console.log(ans)
      })
      .catch(function() {
        return response.text()
      })
    })
  }

  componentDidUpdate(prevProps, prevState){


  }

  handlePlaceSearch(event){
    if(event.charCode === 13){
      var loc = event.target.value
      console.log(loc)
      /*
        Implementing location querying separate (loc first then color right now)
        (location) ? :
      */

      if (this.state.color){
          this.setState({
          location: true,
          queryParams: `${queryParams}&location=${loc}`

        })
      }
      else{
        this.setState({
          location: true,
          queryParams: `?location=${loc}`
        })
      }

    }
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

    // console.log(`True: ${trueColors}, False: ${falseColors}`)

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
    console.log(trueColors)
    let colReqArr = []
    for(var t in trueColors){
      switch (trueColors[t]) {
        /*
          Sending ranges in client-side and plug into query to reduce
          server-side calculations but base number commented below to ref
        */
        case "red":
            colReqArr.push({"r":[195, 255],"g": [0, 60],"b": [0, 60]})
            //[255, 0, 0]
          break
        case "orange":
            colReqArr.push({"r":[195, 255],"g": [98, 158],"b": [0, 60]})
            //[255, 128, 0]
          break
        case "yellow":
            colReqArr.push({"r":[195, 255],"g": [195,255],"b": [0, 60]})
            //[255, 255, 0]
          break
        case "green":
            colReqArr.push({"r":[0, 60],"g": [98, 158],"b": [0, 60]})
            //[0, 128, 0]
          break
        case "blue":
            colReqArr.push({"r":[0, 60],"g": [0, 60],"b": [195,255]})
            //[0, 0, 255]
          break
        case "purple":
            colReqArr.push({"r":[98, 158],"g": [0, 60],"b": [98, 158]})
            //[128, 0, 128]
          break
        case "brown":
            colReqArr.push({"r":[106, 166],"g": [54, 114],"b": [4, 64]})
            //[136, 84, 24]
          break
        case "black":
            colReqArr.push({"r":[0, 60],"g": [0, 60],"b": [0, 60]})
            //[0, 0, 0]
          break
        case "grey":
            colReqArr.push({"r":[98, 158],"g": [98, 158],"b": [98, 158]})
            //[128, 128, 128]
          break
        case "white":
            colReqArr.push({"r":[195,255],"g": [195,255],"b": [195,255]})
            //[255, 255, 255]
          break
      }
    }
    var colors = {}
    let colQuery = ''
    for(var j in colReqArr){

      var index = Number(j)+1
      colors[`color${index}`] = `rgb(${colReqArr[j].r[1]}, ${colReqArr[j].g[1]}, ${colReqArr[j].b[1]})`
    }


    var i = colReqArr[0]

    if(!this.state.color){
      //haven't clicked a query parameter yet
      colQuery = `[[${i.r.join(',')}],[${i.g.join(',')}],[${i.b.join(',')}]]`
    }
    for(var k = 4; k > colReqArr.length; k--){
      colors[`color${k}`] = 'rbg(255, 255, 255)'
    }
    if(!this.state.color){

      (this.state.location)
        ? this.setState({
          color: true,
          colorPalette: colors,
          queryParams: `${queryParams}&color=${colQuery}`
        })
        : this.setState({
          color: true,
          colorPalette: colors,
          queryParams: `?color=${colQuery}`

        })
    }
  }


  render() {
    // <Dashboard />
    var check = this.state.location || this.state.color
    console.log("Query selected:", check)
    /*
      Do not re-render if location and color have been selected
      re-render will be reset after fetch is called
    */
    // if(!check){
      return (
        <div>
          <Navbar palette={this.state.colorPalette} colorSelect={this.handleColorSelect.bind(this)} disableColors={this.state.disableColors} placeSearch={this.handlePlaceSearch.bind(this)} loading={this.state.loading}/>
          <Content imgData={this.state.imgData} />
        </div>
      );
    /* }
    else{

      return (<div>
        savePrevSt
        <Navbar palette={this.state.colorPalette} colorSelect={this.handleColorSelect.bind(this)} disableColors={this.state.disableColors} placeSearch={this.handlePlaceSearch.bind(this)} loading={savePrevSt.loading}/>
        <Content imgData={savePrevSt.imgData} />
      </div>)

    }*/
  }
}
export default App;
