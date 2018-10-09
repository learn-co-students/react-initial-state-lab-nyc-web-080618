// Deliverable #1
// In the src/Bomb.js file, create a Bomb React component.
import React, { Component } from 'react';

// export the Bomb so it can be rendered on the Index.js
export default class Bomb extends Component {
  // this is uninitialized if super() is not called
  // call super(props) to access this.props inside the constructor
  constructor(props){
    super(props)
    // Deliverable #2 & #3
    // Its initial state should have a property called secondsLeft.
    // The initial value of secondsLeft is set by passing in an
    // initialCount prop to the Bomb component.
    this.state = { secondsLeft: this.props.initialCount }
  }

   render(){
    // Deliverable #4
    // It should render the text '<SECONDS_LEFT> seconds left before I go boom!',
    // where <SECONDS_LEFT> is the value of secondsLeft.
    if (this.state.secondsLeft > 0){
      return (<p>{this.state.secondsLeft} seconds left before I go boom!</p>)
    // Deliverable #5
    // If secondsLeft equals 0, it should render 'Boom!' instead.  
    } else if (this.state.secondsLeft === 0){
      return ("Boom!")
    }
   }
 }
