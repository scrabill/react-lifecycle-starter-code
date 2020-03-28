import React, { Component } from 'react'

class DigitalClock extends Component {

  state = {
    time: new Date()
  }

  componentDidMount() {
    setInterval(this.keepTime, 1000)
  }

  keepTime = () => {
    this.setState({
      time: new Date()
    })
  }

  // TODO: Add AM or PM for non-military time

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
          {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}
        </h2>
      </div>
    )
  }
}

export default DigitalClock
