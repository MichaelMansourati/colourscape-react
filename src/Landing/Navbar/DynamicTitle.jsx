import React, {Component} from 'react';

class DynamicTitle extends Component {
  render() {
    const palette = this.props.palette
    const styles = {
      bs1: {color: palette.colour1},
      bs2: {color: palette.colour2},
      bs3: {color: palette.colour3},
      bs4: {color: palette.colour4}
    }
    return(
      <h1>ColourScape
        <span style={styles.bs1}> \</span>
        <span style={styles.bs2}>\</span>
        <span style={styles.bs3}>\</span>
        <span style={styles.bs4}>\ </span>
      </h1>
    )
  }
}
export default DynamicTitle;