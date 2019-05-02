import React from 'react';
import {Link} from 'react-router-dom';
import ControlledCarousel from './Carousel/Carousel'
import Carousel from 'react-bootstrap/Carousel'
import WoodNavbar from '../containers/WoodNavbar';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 36px;
  font-family: "Helvetica Neue";
  line-height: 210px;
  text-align: center;
`

const Home = () => {
  return(
    <Wrapper>
       <ControlledCarousel id="myCarousel" />
    </Wrapper>
  )
};

export default Home;