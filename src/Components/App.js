import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../Styles/App.css';
import PassingProps from '../Components/PassingProps.js'
// -----------------------------------------------------------------------------
class App extends Component {
  constructor () {
    super()
// #1 SET INITIAL STATE PROPERTY'S & VALUES
    this.state = {
      firstName: 'Tony',
      lastName: 'Carbetta (inital state).'
    }
// #5 BIND THE NEW METHOD
  this.updateName = this.updateName.bind(this)
  }

// #2 CREATE METHOD FOR ONCLICK TO LISTEN TOO  (& ADD ON CLICK EVENT LISTENER IN THE RENDER)
  updateName() {
// #3 BUILD THIS.SETSTATE METHOD WITH AN OBJECT PASSED AS THE ARGUMENT
    this.setState({
// #4 INSIDE THE OBJECT CREATE YOUR NEW STATE PROPERTY'S & VALUES
      firstName: 'Kingston',
      lastName: 'Thouchalanh (changed state).'
    })
  }
// -----------------------------------------------------------------------------
  render() {
    return (
      <div>
      <h4>Hello my name is {this.state.firstName} {this.state.lastName}</h4>
        <button onClick={this.updateName}>Click Me to change Name (state)</button>

      <PassingProps gender="male (passing props)" from="The United States of America (passing props)"/>

      </div>
    )
  }
}
// -----------------------------------------------------------------------------
export default App;
