import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
// import woodContainer from '../client/containers/woodContainer.js';
// import stainContainer from '../client/containers/stainContainer.js';
// import productDisplay from '../client/containers/productDisplay.js';
import Cart from '../client/containers/cart.js';
import { mapStateToProps, mapDispatchToProps } from '../client/containers/cart.js';
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

// Newer Enzyme versions require an adapter to a particular version of React
configure({ adapter: new Adapter() });


// !----------------customize these---------------------------
configure({ adapter: new Adapter() });

function setup () {
  const props = {
    selectedWood: "Oak",
    selectedStain: "Dark Brown",
    total: 100
  }

  const enzymeWrapper = shallow(<Cart {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {

  describe('Cart', () => {

    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup()
      expect(enzymeWrapper.find('cart').hasClass('cart')).toBe(true)
      expect(enzymeWrapper.find('h2').text()).toBe('Your order')
    });

      // const { enzymeWrapper, props } = setup()
      // const input = enzymeWrapper.()
      // expect(enzymeWrapper.find)

    // it('renders a div which houses all text components of an order', () => {
    //   const flex = wrapper.find('.flex')
    //   expect(enzymeWrapper.find.type()).toEqual('div');
    //   expect(enzymeWrapper.find.children().length).toEqual(4);
    //   expect(enzymeWrapper.find.childAt(1)).toEqual(this.props.selectWood.type);
      
      
    // });
  })  
  
  
  
  
})
// describe('Cart', () => {
  //   let wrapper, store;
  
  //   beforeEach(() => {
    //     const initialState = {
      //       selectedWood: "Oak",
      //       selectedStain: "Dark Brown",
//       total: 100
//     };
//     store = mockStore(initialState);

//     wrapper = shallow(
//       <Cart store={store} />
//     );
//   });

//   it('should show SelectedStrain, SelectedWood, Total', () => {
//     expect(wrapper.props().selectedWood).toEqual('Oak');
//     expect(wrapper.props().selectedStain).toEqual('Dark Brown');
//     expect(wrapper.props().total).toBe(100);
//   });

//   it('should submit Order when button is clicked', () => {
//     const dispatch = jest.fn();
//     const actions = store.getActions();
//     expect(actions).toEqual([ { type: SUBMIT_ORDER }])
//   });





// });



// describe('React unit tests', () => {
  // describe('woodContainer', () => {
  //   let wrapper;
  //   const props = {
  //     select: 'Mega',
  //     text: 'Markets',
  //   };

  //   beforeAll(() => {
  //     wrapper = shallow(<woodContainer {...props} />);
  //   });

  //   it('Renders a <p> tag with the label in bold', () => {
  //     expect(wrapper.type()).toEqual('p');
  //     expect(wrapper.text()).toEqual('Mega: Markets');
  //     expect(wrapper.find('strong').text()).toMatch('Mega');
  //   });
  // });

  // describe('MarketDisplay', () => {
  //   let wrapper;
  //   const props = {
  //     index: 0,
  //     location: 'Hogwarts',
  //     cards: 10,
  //     percentage: 50.00,
  //     addCard: jest.fn(),
  //     deleteCard: jest.fn(),
  //   };
  //   beforeAll(() => {
  //     wrapper = shallow(<MarketDisplay {...props} />);
  //   });

  //   // 1. A MarketDisplay should display all of its text props inside a
  //   // LabeledText component
  //   it('Renders all props in a LabeledText component', () => {
  //     const labels = wrapper.find(LabeledText);
  //     expect(wrapper.find(LabeledText).get(0).props.text).toEqual(props.index);
  //     expect(wrapper.find(LabeledText).get(1).props.text).toMatch(props.location);
  //     expect(wrapper.find(LabeledText).get(2).props.text).toEqual(props.cards);
  //     expect(wrapper.find(LabeledText).get(3).props.text).toEqual(props.percentage);
  //   });
  //   // 2. It should also contain a div with two buttons
  //   it('contains a div that renders two buttons', () => {
  //     const flex = wrapper.find('.flex');
  //     expect(flex.type()).toEqual('div');
  //     expect(flex.children().length).toEqual(2);
  //     expect(flex.childAt(0).type()).toEqual('button');

  //   });
  //   // 3. The functions passed down should be invoked on click
  //   it('calls passed in methods on button clicks', () => {
  //     // select buttons
  //     const addButton = wrapper.find('button').at(0);
  //     const deleteButton = wrapper.find('button').at(1);

  //     // click the buttons
  //     addButton.simulate('click');
  //     addButton.simulate('click');
  //     deleteButton.simulate('click');
  //     deleteButton.simulate('click');

  //     expect(props.addCard).toHaveBeenCalledTimes(2);
  //     expect(props.deleteCard).toHaveBeenCalledTimes(2);

  //   });
    


  //   // 4. MarketDisplay should render a div with a class of `innerbox`, and the
  //   // interior div wrapping the two buttons should have a class of `flex`
  //   it('renders a div \'.innerbox\' which contains a div \'.flex\'', () =>{
  //     const inner = wrapper.find('.innerbox');

  //     expect(inner.type()).toEqual('div');
  //     expect(inner.find('.flex').type()).toEqual('div');
  //   });
  // });

  /* Cart Container should render a div with:
    1. An h2 of 'Your Order' render a div with 'Type of Wood' and the selected Wood.
    2. A div which renders the selectedWood
    3. A div which renders the selectedStain
    4. A div with the total cost of selections
    5. A div with a 'Go Back' button
    6. A div with a 'Place Order' button
    */


//   describe('MarketsDisplay', () => {
//     // set up the test component
//     let wrapper;
//     const props = {
//       totalCards: 10000,
//       marketList: [
//         {
//           index: 0,
//           location: 'Hogwarts',
//           cards: 2000, // 20.00% of total
//           addCard: jest.fn(),
//           deleteCard: jest.fn(),
//         },
//         {
//           index: 1,
//           location: 'Diagon Alley',
//           cards: 7777, // 77.77% of total
//           addCard: jest.fn(),
//           deleteCard: jest.fn(),
//         },
//         {
//           index: 2,
//           location: 'Azkaban',
//           cards: 0, // 0.00% of total
//           addCard: jest.fn(),
//           deleteCard: jest.fn(),
//         },
//       ],
//       addCard: jest.fn(),
//       deleteCard: jest.fn(),
//     };

//     beforeAll(() => {
//       wrapper = shallow(<MarketsDisplay {...props} />);
//     });
//     // TODO: Test the following:
//     //   1. A MarketsDisplay should have an h4 element to display the 'Markets'
//     //   title
//     it('Renders the Markets title in an h4',() => {
//       expect(wrapper.find('h4').text()).toEqual('Markets');
//     });
//     //   2. A single MarketDisplay is rendered for each market in the
//     //   marketList prop
//     it('renders a MarketDisplay for each market object in marketList prop', () => {
//       expect(wrapper.find(MarketDisplay).length).toEqual(props.marketList.length);
//     });
//     //   3. The percentage prop should be a string calculated to two decimals.
//     //   Test for zero, a whole number, and a fractional value. (Right now this
//     //   is implemented incorrectly, so follow TDD here)
//     it('calculates percentage of total cards to two decimals for each market', () => {
//       const markets = wrapper.find(MarketDisplay);
//       expect(markets.get(0).props.percentage).toMatch('20.00');
//       expect(markets.get(1).props.percentage).toMatch('77.77');
//       expect(markets.get(2).props.percentage).toMatch('0.00');
    

//     });
//   });
// });