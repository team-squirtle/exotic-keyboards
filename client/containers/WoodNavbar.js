import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import { Col, Navbar, Container, Button, InputGroup, Form, FormControl } from 'react-bootstrap';

class WoodNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
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
              <Form.Control
                type='email'
                placeholder='Email'
                className='mr-sm-2'
                onChange={this.props.inputEmail} />
              <Form.Control
                type='password'
                placeholder='Password' className='mr-sm-2' />
              <Button
                type='submit'
                variant='secondary'
                onSubmit={this.props.login}>
                Login
                </Button>
            </Form.Row>
          </Form>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  didLogIn: store.cart.didLogIn,
})

const mapDispatchToProps = dispatch => ({
  login: () => dispatch(actions.login()),
  inputEmail: (event) => {
    dispatch(actions.inputEmail(event.target.value));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WoodNavbar));