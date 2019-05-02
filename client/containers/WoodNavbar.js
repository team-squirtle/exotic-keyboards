import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import { Col, Navbar, Container, Button, InputGroup, Form, FormControl } from 'react-bootstrap';

class WoodNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target;
    this.setState({ [ name ]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    // const { dispatch } = this.props;
    // if (email && password) {
    // dispatch(userActions.login(email, password));
    // }
  }

  render() {
    const { email, password, submitted } = this.state;

    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            Lumber Exotics Co.
            </Navbar.Brand>
          <Form
            inline
            onSubmit={this.handleSubmit}
            name='loginForm'>
            <Form.Row >
              <Form.Control
                type='email'
                name='email'
                value={email}
                placeholder='Email'
                className='mr-sm-2'
                onChange={this.handleChange}
              // onChange={this.props.inputEmail}

              />
              <Form.Control
                type='password'
                name='password'
                value={password}
                placeholder='Password' className='mr-sm-2'
                onChange={this.handleChange}
              />
              <Button
                type='submit'
                variant='secondary'
              // onSubmit={this.props.login}
              >
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

  // login: () => dispatch(actions.login()),
  inputEmail: (event) => {
    dispatch(actions.inputEmail(event.target.value));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WoodNavbar));