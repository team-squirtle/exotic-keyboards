import React, { Component } from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router';
import * as actions from '../actions';
import { Form, FormControl, Button } from 'react-bootstrap';
// import { FORMERR } from 'dns';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value
    // address1 = this.target.address1;
    // address2 = this.target.address2;
    // city = this.target.city;
    // state = this.target.state;
    // zip = this.target.zip;
    // phone = this.target.phone;

    this.setState({
      [name] : value
    })
    // console.log(this.state.name)
    // console.log(this.state.address1)
  }
  handleClick() {
    const {history} = this.props;
    history.push('/stain');
  }

  placeOrder(e) {
    e.preventDefault();
    console.log('test state', this.state);
    // console.log('current state', this.getState());
    this.props.submitOrder(this.state);
    // const {history} = this.props;
    // history.push('/success');
  }

  render() {
    return (
      <div>
        <div>
          <h2>Your Order</h2>
          <div>Wood Selection: { this.props.selectedWood.type }</div>
          <div>Stain Color: { this.props.selectedStain.type }</div>
          <div>Total: { this.props.total }</div>
          <div>Your Email: { this.props.email }</div>
        </div>
        <div>
          <button onClick={this.handleClick}>Go back</button>
        </div>
        <div>
          <Form>
            <Form.Control
            type="text" name='name' onChange={this.handleChange} required
            >
              <label>Name:</label>
              {/* <input type="text" name='name' onChange={this.handleChange} required/> */}
              
            </Form.Control>
            <Form.Contol>
            <label>Address 1:</label>
            <input type="text" name='address1' onChange={this.handleChange} required/>  
            </Form.Contol>
            <Form.Control>
              
              <label>Address 2:</label>
              <input type="text" name='address2' onChange={this.handleChange}/>
            </Form.Control>
            <Form.Control>

              <label>City:</label>
              <input type="text" name='city' onChange={this.handleChange}  required/>
              
            </Form.Control>
            <Form.Control>

              <label>State:</label>
              <input type="text" name='state' onChange={this.handleChange} required/>
              
            </Form.Control>
              <Form.Control>
              <label>Zip:</label>
              <input type="text" name='zip' onChange={this.handleChange} required/>
              
              </Form.Control>
<Form.Control>

              <label>Phone Number:</label>
              <input type="text" name='phoneNumber' onChange={this.handleChange} required/>
              
            
</Form.Control>
            <button type="button" onClick={this.placeOrder}>Place order</button>
          </Form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  selectedWood: store.cart.wood,
  selectedStain: store.cart.stain,
  total: store.cart.total,
  name: store.cart.name,
  email: store.cart.email,
  address1: store.cart.address_1,
  address2: store.cart.address_2,
  city: store.cart.city,
  state: store.cart.stateABB,
  zip: store.cart.zip,
  phone: store.cart.phone
});

const mapDispatchToProps = dispatch => ({
  submitOrder: value => dispatch(actions.submitOrder(value))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cart));