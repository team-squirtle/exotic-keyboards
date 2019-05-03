import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import { Col, Navbar, Container, Button, InputGroup, Form, FormControl } from 'react-bootstrap';
import axios from 'axios';
import WelcomeUser from '../components/WelcomeUser';
import LoginForm from '../components/LoginForm';


class WoodNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
    this.onChange = this.onChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  onChange(e) {
    console.log(e.target.value)
    const { name, value } = e.target;
    this.setState({ [ name ]: value });
  }

  handlesubmit(e) {
    e.preventDefault();

    // this.setState({ submitted: true });
    // const { email, password } = this.state,
    //   requestOptions = {
    //     method: 'POST',
    //     // headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password })
    //   }
    // axios('/api/user/login', requestOptions)
    //   .then(() => { console.log('success!') })
    //   .catch((err) => { console.log(err) })
    const email = this.state.email,
      password = this.state.password,
      payloadObj = { email, password };

    this.props.login(payloadObj);

    // const { dispatch } = this.props;
    // if (email && password) {
    // dispatch(userActions.login(email, password));
    // }
  }

  render() {
    const { email, password, submitted } = this.state;

    const userWelcome = () => {
      if (this.props.isLoggedIn) {
        return <WelcomeUser />
      } else {
        return <LoginForm
          email={this.state.email}
          password={this.state.password}
          onChange={this.onChange}
          handlesubmit={this.handlesubmit}
        />
      }
    }

    return (
      <div>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>
            Lumber Exotics Co.
            </Navbar.Brand>
          {userWelcome()}
          {/* <WelcomeUser /> */}
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  isLoggedIn: store.cart.isLoggedIn,
})

const mapDispatchToProps = dispatch => ({

  login: (value) => dispatch(actions.login(value)),
  // inputEmail: (event) => {
  //   dispatch(actions.inputEmail(event.target.value));
  // },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WoodNavbar));