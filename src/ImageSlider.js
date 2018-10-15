import React, {Component} from 'react'

class ImageSlider extends Component {
  constructor(props) {
    super(props)

    this.state={currentSlideIndex:0}
  }

  render() {
    return (
      <React.Fragment>
        I am on slide {this.state.currentSlideIndex}
      </React.Fragment>
    )
  }

}

export default ImageSlider
