import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import { Navbar, Container, Button, InputGroup, FormControl } from 'react-bootstrap';
import Form from 'react-bootstrap/FormControl';

console.log(Navbar)

class WoodNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Container>
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand>
              Lumber Exotics Co.
            </Navbar.Brand>
            {/* <Form.Group > */}
            {/* <FormControl type='password'> */}

            {/* </FormControl> */}
            {/* <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id='basic-addon1'>
                    Username
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text id='basic-addon1'>
                    Password
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup> */}
            {/* </Form.Group> */}
            <Form>
              {/* <FormControl type='password' placeholder='Password' className=" mr-sm-2" /> */}
            </Form>
            <Button type='submit' size='med' variant='light' className="mr-sm-2">
              Login
            </Button>
          </Navbar>
        </Container>
      </div>
    );
  }
}

// const WoodNavbar = () => {
//   return (
//     <h1>
//       hello!!
//   </h1>
//   )
// }


export default WoodNavbar;