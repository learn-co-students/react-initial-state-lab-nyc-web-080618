// Deliverable #1
// In the src/ImageSlider.js file, create an ImageSlider React component
import React, { Component } from 'react';

// export the ImageSlider so it can be rendered on the Index.js
export default class ImageSlider extends Component {
  // this is uninitialized if super() is not called
  // call super(props) to access this.props inside the constructor
  constructor(props){
    super(props)
    // Deliverable #2
    // Its initial state should have a property called currentSlideIndex that starts at 0
    this.state = { currentSlideIndex: 0 }
    console.log("I am inside the constructor and props are: ", this.props);
    console.log("I am inside the constructor and state is: ", this.state);
  }
   render(){
    // Deliverable #3
    // It should only render out the text 'I am on slide <CURRENT_SLIDE>',
    // where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex.
    return( <p>I am on slide {this.state.currentSlideIndex}</p> )
  }
 }
