import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.
import WoodContainer from '../client/containers/woodContainer.js';
import StainContainer from '../client/containers/stainContainer.js';
import ProductDisplay from '../client/components/productDisplay.js';

// Newer Enzyme versions require an adapter to a particular version of React


// !----------------customize these---------------------------
configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('WoodContainer', () => {
    let wrapper;
    // const props = {
    //   selectedItem: false,
    // };

    beforeAll(() => {
      wrapper = shallow(<StainContainer />);
    });

    it('renders children when passed in', () => {
      // const wrapper = shallow((
      //   <StainContainer>
      //     <button></button>
      //   </StainContainer>
      // ));
      console.log(wrapper);
      expect(wrapper.children('button')).toHaveLength(1);
    });

    // const addButton = wrapper.find('#').at(0);
    // const deleteButton = wrapper.find('button').at(1);
    // expect(wrapper.type()).toEqual('p');
    // expect(wrapper.text()).toEqual('Mega: Markets');
    // expect(wrapper.find('strong').text()).toMatch('Mega');
  });
});
// })
  // !--------------------------------------------------------------

//   describe('MarketDisplay', () => {
//     let wrapper;
//     const props = {
//       index: 0,
//       location: 'Hogwarts',
//       cards: 10,
//       percentage: 50.00,
//       addCard: jest.fn(),
//       deleteCard: jest.fn(),
//     };
//     beforeAll(() => {
//       wrapper = shallow(<MarketDisplay {...props} />);
//     });

//     // 1. A MarketDisplay should display all of its text props inside a
//     // LabeledText component
//     it('Renders all props in a LabeledText component', () => {
//       const labels = wrapper.find(LabeledText);
//       expect(wrapper.find(LabeledText).get(0).props.text).toEqual(props.index);
//       expect(wrapper.find(LabeledText).get(1).props.text).toMatch(props.location);
//       expect(wrapper.find(LabeledText).get(2).props.text).toEqual(props.cards);
//       expect(wrapper.find(LabeledText).get(3).props.text).toEqual(props.percentage);
//     });
//     // 2. It should also contain a div with two buttons
//     it('contains a div that renders two buttons', () => {
//       const flex = wrapper.find('.flex');
//       expect(flex.type()).toEqual('div');
//       expect(flex.children().length).toEqual(2);
//       expect(flex.childAt(0).type()).toEqual('button');

//     });
//     // 3. The functions passed down should be invoked on click
//     it('calls passed in methods on button clicks', () => {
//       // select buttons
//       const addButton = wrapper.find('button').at(0);
//       const deleteButton = wrapper.find('button').at(1);

//       // click the buttons
//       addButton.simulate('click');
//       addButton.simulate('click');
//       deleteButton.simulate('click');
//       deleteButton.simulate('click');

//       expect(props.addCard).toHaveBeenCalledTimes(2);
//       expect(props.deleteCard).toHaveBeenCalledTimes(2);

//     });
//     // 4. MarketDisplay should render a div with a class of `innerbox`, and the
//     // interior div wrapping the two buttons should have a class of `flex`
//     it('renders a div \'.innerbox\' which contains a div \'.flex\'', () => {
//       const inner = wrapper.find('.innerbox');

//       expect(inner.type()).toEqual('div');
//       expect(inner.find('.flex').type()).toEqual('div');
//     });
//   });

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
//     it('Renders the Markets title in an h4', () => {
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
