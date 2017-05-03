import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Landing/Navbar.jsx';
import Content from './Landing/Content.jsx';
import imgData from './Landing/imgdata.js';
import Dashboard from './Dashboard/Dashboard.jsx';
import infoContent from './Dashboard/Content/infoContent.js'

/*
  Suraj:
  After things get done, work on getting slashes to respond to colours selected, then work on something for <italics>hover</italics>

  Initial search query in ComponenetDidMount
  this

  User query being buildon component
*/

class App extends Component {
  constructor() {
    super();
    // fetchRandColour()
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
      queryParams: '',
      color:    false,
      location: false,
      loading:  false,
      locations: {
        place1: {lat: 43.639429, lon: -79.412441},
        place2: {lat: 43.639429, lon: -79.412441},
        place3: {lat: 43.639429, lon: -79.412441},
        place4: {lat: 43.637383, lon: -79.424779}
      },
      infoContent: infoContent,
      hoveredInfoCard: -1,
      user: false
    }

    this.handleColorSelect = this.handleColorSelect.bind(this);
    this.handleInfoCardME  = this.handleInfoCardME.bind(this);
    this.handleInfoCardML  = this.handleInfoCardML.bind(this);
  }
  componentWillMount() {
    fetch(`http://localhost:8005/`)
    .then((res) => {
      res.clone().json().then((ans) => {
        this.setState({
          imgData:  ans.body
        })
      })
    })
  }
  componentDidUpdate(prevProps, prevState){
    console.log(this.state)
    if (this.state.queryParams != prevState.queryParams) {

      fetch(`http://localhost:8005/${this.state.queryParams}`)
      .then((response) => {
        response.clone().json()
         .then((ans) => {
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

      this.setState({
        location: true,
        loading:  true,
        queryParams: `geo/${loc}`
      })

    }
  }

  handleLikeImage(event, id) {
    let CURRENT_USER = 1
    console.log(event.target)
    event.currentTarget.style.color = '#ff4e4e';

    fetch(`http://localhost:8005/fave/${event.target.id}?UID=${CURRENT_USER}`,{
      method:'POST'
    })
    .then((res) => {
      if(res.status == 200 ){
      }
    })
  }

  handleInfoCardME(event) {
    const enteredCard = event.target.parentNode.id;
    this.setState({hoveredInfoCard: enteredCard})
  }

  handleInfoCardML(event) {
    this.setState({hoveredInfoCard: -1})
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

    /*
      used in seach for indexOf to reset the color search
      */
    let resSearch = "?color="
    var first = colReqArr[0]
    var second = colReqArr[1]
    var numSel = colReqArr.length
    // for(var k = 4; k > colReqArr.length; k--){
    //   colors[`color${k}`] = 'rbg(255, 255, 255)'
    // }
    if((numSel <= 2) ){
      if(first){
        colQuery = `[[${first.r.join(',')}],[${first.g.join(',')}],[${first.b.join(',')}]]`
        if(second && !this.state.location){
          console.log(colQuery)
          colQuery = `${colQuery}&color2=[[${second.r.join(',')}],[${second.g.join(',')}],[${second.b.join(',')}]]`
          console.log('Second colour query:',colQuery)
        }
        else if (second && this.state.location){
          console.log("Propper state transfer!!", colQuery)
          colQuery =
           `&color2=[[${second.r.join(',')}],[${second.g.join(',')}],[${second.b.join(',')}]]`
        }
      }
      let setObj = {}
      if (this.state.location){
        console.log("Location is selected")
        const ind = this.state.queryParams.indexOf(resSearch)
        const resetQuery = this.state.queryParams.slice(0,ind)
        if(ind > 1){
          switch (numSel) {
            case 0:
              console.log(resetQuery)
              setObj = {
                color: true,
                colorPalette: colors,
                queryParams: `${resetQuery}`
              }
              break;
            case 1:
              console.log(ind, this.state.queryParams, resetQuery)
              setObj = {
                color: true,
                colorPalette: colors,
                queryParams: `${resetQuery}?color=${colQuery}`
              }
              break;
            case 2:
              setObj = {
                color: true,
                colorPalette: colors,
                queryParams: `${this.state.queryParams}${colQuery}`
              }
              break;

          }
        }

        else{
          setObj = {
            color: true,
            colorPalette: colors,
            queryParams: `${this.state.queryParams}?color=${colQuery}`
          }
        }

      }
      else{
        console.log("Location not selected")
        setObj = {
          color: false,
          colorPalette: colors,
          queryParams: `palette?colQuery=${colQuery}`
        }
      }
      this.setState(setObj)
    }
  }

  render() {
    var check = this.state.location || this.state.color
    /*
      Do not re-render if location and color have been selected
      re-render will be reset after fetch is called

      Dashboard component:
        <Dashboard
        infoContent={this.state.infoContent}
        InfoCardME={this.handleInfoCardME}
        InfoCardML={this.handleInfoCardML}
        hoveredInfoCard={this.state.hoveredInfoCard}
        />

<<<<<<< HEAD
      Landing component:
      <Content imgData={this.state.imgData} clickLike={this.handleLikeImage.bind(this.props.id)}/>
=======
      Landing componentL
        <Content imgData={this.state.imgData} clickLike={this.handleLikeImage.bind(this.props.id)}/>
>>>>>>> master
    */

    return (
      <div>
        <Navbar
        palette={this.state.colorPalette}
        colorSelect={this.handleColorSelect.bind(this)}
        disableColors={this.state.disableColors}
        placeSearch={this.handlePlaceSearch.bind(this)}
        loading={this.state.loading}
        user={this.state.user}
        />
        <Content imgData={this.state.imgData} clickLike={this.handleLikeImage.bind(this.props.id)}/>


      </div>
    );
  }
}
export default App;
