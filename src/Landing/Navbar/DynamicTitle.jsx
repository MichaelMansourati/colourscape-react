import React, {Component} from 'react';

class DynamicTitle extends Component {
  render() {
    const palette = this.props.palette
    const styles = {
      bs1: {color: palette.color1},
      bs2: {color: palette.color2},
      bs3: {color: palette.color3},
      bs4: {color: palette.color4}
    }
    return(
      <a onClick={this.props.navFrom}>
        <h1>C O L O U R S C A P E
          <span style={styles.bs1}> \</span>
          <span style={styles.bs2}>\</span>
        </h1>
      </a>
    )
  }
}
export default DynamicTitle;