import React, {Component} from 'react'

class Bomb extends Component {
  constructor(props) {
    super(props)

    this.state = {secondsLeft:this.props.initialCount}
  }

  render() {
    const display = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`

    return <div>{display}</div>


  }
}

export default Bomb
