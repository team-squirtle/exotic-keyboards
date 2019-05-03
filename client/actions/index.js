// ACTIONS
import axios from 'axios';

import * as types from '../constants/actionTypes';

// ASYNC ACTIONS
export const getWood = () => {
  return (dispatch) => {
    axios.get('/api/product/wood')
      .then(response => {
        dispatch({
          type: types.GET_WOOD,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const getStain = () => {
  return (dispatch) => {
    axios.get('/api/product/stain')
      .then(response => {
        dispatch({
          type: types.GET_STAIN,
          payload: response.data
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

export const login = (value) => {
  return (dispatch) => {
    axios.post('/api/user/login', {
      email: value.email,
      password: value.password
    })
      .then(response => {
        console.log('logged in!')

        dispatch({
          type: types.LOGIN,
          payload: value.email,
        })
      })
      .catch(err => {
        console.log(err);
      });
  }
};

// NON-ASYNC ACTIONS
export const submitOrder = () => {
  return {
    type: types.SUBMIT_ORDER
  }
};

export const selectWood = (value) => {
  return {
    type: types.SELECT_WOOD,
    payload: value
  }
};
export const selectStain = (value) => {
  console.log(value);
  return {
    type: types.SELECT_STAIN,
    payload: value
  }
};
export const inputEmail = (value) => {
  return {
    type: types.INPUT_EMAIL,
    payload: value,
  }
};
export const logout = () => {
  console.log('logging out...');
  return {
    type: types.LOGOUT,
  }
};