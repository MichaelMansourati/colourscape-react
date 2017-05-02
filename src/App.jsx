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
    /*for(var i in imgData) {
      var c1 = `rgb(${imgData[i].c1.red}, ${imgData[i].c1.green}, ${imgData[i].c1.blue})`
      var c2 = `rgb(${imgData[i].c2.red}, ${imgData[i].c2.green}, ${imgData[i].c2.blue})`
      var c3 = `rgb(${imgData[i].c3.red}, ${imgData[i].c3.green}, ${imgData[i].c3.blue})`
      var c4 = `rgb(${imgData[i].c4.red}, ${imgData[i].c4.green}, ${imgData[i].c4.blue})`
      var colArr = [c1, c2, c3, c4]
      imgData[i].colArr = colArr
    }*/
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

  // shouldComponentUpdate(nextProps, nextState) {

  //   let x = nextState
  //   console.log(`Should look for color: ${x.color} location: ${x.location}\nparams:${nextState.queryParams}`)
  //   console.log(x)
  //   /*
  //     Fetch resets query params to be '' after complete, and query will set when query has been updated with respect to state
  //   */
  //   return (nextState.queryParams != this.state.queryParams)

  // }


  componentDidUpdate(prevProps, prevState){
    console.log("Updated Props")
    console.log(this.state)
    if (this.state.queryParams != prevState.queryParams) {

      fetch(`http://localhost:8005/${this.state.queryParams}`)
      .then((response) => {
        response.clone().json()
         .then((ans) => {
          console.log(ans.body)

          this.setState({
            imgData:  ans.body,
            loading:  false
          })
         })
         .catch(function() {
          return response.text()
         })
      })
    }



  }

  handlePlaceSearch(event){
    if(event.charCode === 13){
    event.preventDefault()
      var loc = event.target.value
      console.log(loc)
      /*
        Implementing location querying separate (loc first then color right now)
        (location) ? :
      if (this.state.color){
          this.setState({
          location: true,
          loading:  true,
          queryParams: `${queryParams}&location=${loc}`
        })
      }
      */
      this.setState({
        location: true,
        loading:  true,
        queryParams: `geo/${loc}`
      })

    }
  }

  handleLikeImage(event, id) {
    console.log(event.target)
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


    for(var k = 4; k > colReqArr.length; k--){
      colors[`color${k}`] = 'rbg(255, 255, 255)'
    }
    console.log("Color Select ignored:", this.state.color)
    if(!this.state.color){
      colQuery = `[[${i.r.join(',')}],[${i.g.join(',')}],[${i.b.join(',')}]]`

      if (this.state.location){
        console.log("Location is selected")
        this.setState({
          color: true,
          colorPalette: colors,
          queryParams: `${queryParams}&color=${colQuery}`
       })
      }
      else{
        console.log("Location not selected")
        this.setState({
          color: true,
          colorPalette: colors,
          queryParams: `palette?colQuery=${colQuery}`
        })
      }
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
      return (
        <div>
          <Navbar palette={this.state.colorPalette} colorSelect={this.handleColorSelect.bind(this)} disableColors={this.state.disableColors} placeSearch={this.handlePlaceSearch.bind(this)} loading={this.state.loading}/>
          <Content imgData={this.state.imgData} clickLike={this.handleLikeImage.bind(this.props.id)}/>
        </div>
      );

  }
}
export default App;
