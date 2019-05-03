import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'
import * as actions from '../actions/index';
import ProductDisplay from '../components/productDisplay';
import CardGroup from 'react-bootstrap/CardGroup'


// CONNECT our redux store, mapStateToProps, mapDispatchToProps
class StainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: false, // initial state when wood has not been selected.
    };
    this.selectItemClickHandler = this.selectItemClickHandler.bind(this); // Bind handleclick to Wood Container
    this.goToCheckout = this.goToCheckout.bind(this);
  }

  componentDidMount() {
    this.props.getStain();
  }

  selectItemClickHandler(e) {  // handleClick will setState to NOT selected when clicked.
    const payloadObj = {};
    payloadObj.type = e.currentTarget.id;
    this.props.stain.forEach(item => {
      if (payloadObj.type === item.type) {
        payloadObj.price = parseFloat(item[ 'price' ]);
      }
    });
    // select wood type for cart
    this.props.selectStain(payloadObj);
    this.setState({
      selectedItem: e.currentTarget.id
    });
  }

  goToCheckout() {
    if (this.state.selectedItem !== false) {
      const { history } = this.props;
      history.push('/cart');
    }
  }

  render() {
    const stainBoxes = this.props.stain.map(el => (
      <ProductDisplay key={el.type} type={el.type} image={el.image} description={el.description} price={el.price} inStock={el.inStock} selectedItem={this.state.selectedItem} selectItemClickHandler={this.selectItemClickHandler} />
    ));

    return (
      <div>
        <h1>Select your stain</h1>
        <div className="card-group">
          {stainBoxes}
        </div>
        <button>
          <Link to="/wood/">Previous</Link>
        </button>
        <button onClick={this.goToCheckout}>
          Next step: Checkout
        </button>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  stain: store.catalog.stain
});

// Runs our action creator
const mapDispatchToProps = dispatch => ({
  getStain: () => dispatch(actions.getStain()),
  selectStain: (value) => dispatch(actions.selectStain(value))
});

// This is how are container knows what method is has available to it in its access to the store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(StainContainer));



