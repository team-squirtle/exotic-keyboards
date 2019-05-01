import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


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
            src='https://i.imgur.com/g9Qdfv6.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Sourced from the Finest Timber</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/KL6xTzy.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Choose Your Lumber</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/rCutEu9.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Choose your Stain</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.imgur.com/9rDKdfI.jpg"
            alt="Fourth slide"
          />

          <Carousel.Caption>
            <h3>Fast &amp; Free Shipping </h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

// render(<ControlledCarousel />);

export default ControlledCarousel;