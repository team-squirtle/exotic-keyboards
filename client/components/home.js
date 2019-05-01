import React from 'react';
import { Link } from 'react-router-dom';
import WoodNavbar from '../containers/WoodNavbar';

const Home = () => (
  <div>
    <WoodNavbar />
    <h1>Buy a keyboard wrist rest that perfectly compliments your style</h1>
    <Link to="/wood">get started </Link>
  </div>
);

export default Home;