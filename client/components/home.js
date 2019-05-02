import React from 'react';
import {Link} from 'react-router-dom';
import ControlledCarousel from './Carousel/Carousel'
import Carousel from 'react-bootstrap/Carousel'
import WoodNavbar from '../containers/WoodNavbar';

const Home = () => {
  return(
    <div>
      <ControlledCarousel />
      <h1>Buy a keyboard wrist rest that perfectly compliments your style</h1>
      <Link to="/wood">get started </Link>
    </div>
  )
};

export default Home;