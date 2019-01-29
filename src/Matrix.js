import React, { Component } from 'react';
import Cell from './cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val =>  <Cell value={val}/>) // replace me and render a cell component instead!
   
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    // debugger
  // console.log(values)

    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  // value = new Array(10)
  values: (() => {
    let defRows = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRows))
  })()
  
}