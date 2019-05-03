import * as types from '../constants/actionTypes';

const initialState = {
  wood: { type: 'ash', price: 20 },
  stain: { type: 'purple', price: 30 },
  base: 50,
  total: 100,
  name: '',
  email: '',
  didLogIn: false,
  address_1: '',
  address_2: '',
  city: '',
  stateABB: '',
  zip: '',
  phone: ''
};

function calcTotal(base, woodPrice, stainPrice) {
  return (base + woodPrice + stainPrice).toFixed(2);
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_WOOD:
      return {
        ...state,
        wood: { type: action.payload.type, price: action.payload.price },
        total: calcTotal(state.base, action.payload.price, state.stain.price)
      };
    case types.SELECT_STAIN:
      return {
        ...state,
        stain: { type: action.payload.type, price: action.payload.price },
        total: calcTotal(state.base, state.wood.price, action.payload.price)
      };
    case types.SUBMIT_ORDER:
      const name = action.payload.name;
      const email = action.payload.email;
      const address1 = action.payload.address1;
      const address2 = action.payload.address2;
      const city = action.payload.city;
      const stateABB = action.payload.stateABB;
      const zip = action.payload.zip;
      const phone = action.payload.phone;
      return {
        ...state,
        email,
        wood,
        stain,
        address1,
        address2,
        city,
        stateABB,
        zip,
        phone
      };
    // case types.LOGIN:
    //   return {
    //     ...state,
    //     didLogIn: true,
    //   };
    case types.LOGOUT:
      return {
        ...state,
        didLogIn: false,
      };
    case types.INPUT_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;