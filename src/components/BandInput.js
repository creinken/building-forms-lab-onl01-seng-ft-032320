// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

    constructor() {
      super();
      this.state = {
          name: ''
      }
    }

    handleOnChange = event => {
      this.setState({
        name: event.target.value
      })
    }

    handleOnSubmit = event => {
      event.preventDefault();
      this.props.addBand({ name: this.state.name });
      this.setState({
        name: ''
      })
    }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange} />
          <input type="submit" value="Add Band" />
        </form>
      </div>
    )
  }
}

export default BandInput
