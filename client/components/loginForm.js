import React from 'react';
import { Col, Navbar, Container, Button, InputGroup, Form, FormControl } from 'react-bootstrap';

const LoginForm = props => {
  return (
    <Form
      inline
      onSubmit={(e) => { props.handlesubmit(e) }}
      name='loginForm'>
      <Form.Row >
        <Form.Control
          size='sm'
          type='email'
          name='email'
          // value={email}
          placeholder='Email'
          className='mr-sm-2'
          onChange={(e) => { props.onChange(e) }}

        />
        <Form.Control
          size='sm'
          type='password'
          name='password'
          // value={password}
          placeholder='Password'
          className='mr-sm-2'
          onChange={(e) => { props.onChange(e) }}
        />
        <Button
          size='sm'
          type='submit'
          variant='secondary'
        >
          Login
        </Button>
      </Form.Row>
    </Form>
  )

}


export default LoginForm;