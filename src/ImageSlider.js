// your ImageSlider code here!
import React, {Component} from "react";

export default class ImageSlider extends Component {
  constructor() {
    super()
    this.state = ({currentSlideIndex: 0})
  } // end of constructor

  render() {
    return(
    <div>I am on slide {this.state.currentSlideIndex}</div>
    )
  }

} //end of class
