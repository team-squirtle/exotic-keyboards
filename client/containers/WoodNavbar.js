import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import { Col, Navbar, Container, Button, InputGroup, Form, FormControl } from 'react-bootstrap';
// import Form from 'react-bootstrap/FormControl';

class WoodNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            Lumber Exotics Co.
            </Navbar.Brand>
          <Form inline >
            <Form.Row >
              {/* <Col lg='6'> */}
              <Form.Control placeholder='Email' className='mr-sm-2' />
              {/* </Col> */}
              {/* <Col lg='4'> */}
              <Form.Control placeholder='Password' className='mr-sm-2' />
              {/* </Col> */}
              {/* <Col lg='2'> */}
              <Button type='submit' variant='secondary' >Login</Button>
              {/* </Col> */}
            </Form.Row>
          </Form>
          {/* <InputGroup > */}
          {/* <Col sm='2'> */}
          {/* <FormControl
                placeholder='Username'
                aria-label='Username'
                aria-describedby='basic-addon1'
              /> */}
          {/* </Col> */}
          {/* </InputGroup> */}
          {/* <Button type='submit' size='med' variant='light' className="mr-sm-2">
              Login
            </Button> */}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  didLogIn: store.cart.wood,
  selectedStain: store.cart.stain,
  total: store.cart.total
})


export default WoodNavbar;