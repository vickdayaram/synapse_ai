import React, { Component } from 'react'
import ReactPaint from 'react-paint';

const props = {
  style: {
    background: 'green',
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 1000
};

class SketchComponent extends Component {
  render() {
    return (
      <div >
        <ReactPaint {...props} />
      </div>
    );
  }
}

export default SketchComponent
