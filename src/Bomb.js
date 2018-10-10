// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {

  constructor(props){
    super(props);
    this.state={
      secondsLeft:this.props.initialCount
    }
  }


  render() {
    return (
      this.state.secondsLeft !== 0 ? <h3>{this.state.secondsLeft} seconds left before I go boom!</h3> : <h3>Boom!</h3>
    );
  }

}

export default Bomb;
