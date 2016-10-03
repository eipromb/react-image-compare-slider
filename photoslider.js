// react
import React from 'react'

// libraries

// components

// constants

// css
import './photoslider.scss'

var PhotoSlider = React.createClass({
  getInitialState() {
    return {
      touch: false,
      position: 100
    }
  },
  touchstart(event) {
    this.setState({touch:true});
  },
  touchend(event) {
    this.setState({touch:false});
  },
  touchmove(event) {
    if (this.state.touch) {
      this.setState({position: (event.touches[0].pageX/375)*100})

    }
  },
  render() {
    return (
      <div className="photo-comparison-wrapper" style={{height: '100%'}}>
        <div className="photo-comparison-image-wrapper photo-comparison-before-wrapper" style={{width:this.state.position+'%'}}>
          <div className="photo-comparison-image">
            <img className="photo-comparison-before" src="http://192.168.31.128:8080/images/before.jpg" style={{width:'375px'}}/>
          </div>
          <div className="photo-comparison-separator">
            <div className="photo-comparison-separator-control" onTouchStart={this.touchstart} onTouchEnd={this.touchend} onTouchMove={this.touchmove}></div>
          </div>
        </div>
        <div className="photo-comparison-image-wrapper photo-comparison-after-wrapper">
          <div className="photo-comparison-image">
            <img className="photo-comparison-after" src="http://192.168.31.128:8080/images/after.jpg" style={{width:'375px'}}/>
          </div>
        </div>
      </div>
    )
  }
});

export default PhotoSlider
export { PhotoSlider }
