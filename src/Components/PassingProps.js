import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/PassingProps.css';
import '../Styles/hover.css';
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
    this.state = {
      firstName: 'Tony',
    }
  }
// -----------------------------------------------------------------------------
  render() {
    return (
      <div>
          <h4>My gender is {this.props.gender}.</h4>
          <h4>I am from {this.props.from}.</h4>
      </div>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;
