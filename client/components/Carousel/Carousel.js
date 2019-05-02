import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src='https://i.imgur.com/3Q3Xcht.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            <div>Sourced from the Finest Timber</div>
            <Link to="/wood">Get Started </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/KL6xTzy.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div>Choose Your Lumber</div>
            <Link to="/wood">Get Started </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/rCutEu9.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <div>Choose your Stain</div>
            <Link to="/wood">Get Started </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/9rDKdfI.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <div>Fast &amp; Free Shipping </div>
            <Link to="/wood">Get Started </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

// render(<ControlledCarousel />);

export default ControlledCarousel;