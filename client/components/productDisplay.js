import React from 'react';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';
import CardGroup from 'react-bootstrap/CardGroup';



const ProductDisplay = props => {
  let style;
  if (props.type === props.selectedItem) {
    style = {
      backgroundColor: 'lightBlue'
    }
  } else {
    style = {
      backgroundColor: 'white',
      fontFamily: 'Helvetica Neue',
      fontSize: '18px',
    }
  }
  const handleClick = e => {
    props.selectItemClickHandler(e);
  };
  return (
    // <div className ="row">
    //   <div className="col-m-4">
        <div className="card" onClick={handleClick} style={style} id={props.type}>
          <img src={props.image} className="card-img-top" ></img>
          <div className="card-body">
            <h5 id={props.type} className="card-title">{props.type}</h5>
            <p className="card-text">{props.description}</p>
            <a onClick={handleClick} className="btn btn-primary">SELECT</a>
            <p className="card-text">{props.price}</p>
            <p className="card-text"><small className="text-muted">{props.inStock === true ? 'Available' : 'Out of Stock'}</small></p>
          </div> 
        </div>
    //   </div>
    // </div>
  );
};

export default ProductDisplay;
{/* <li> {props.image} </li>
<li> {props.description} </li>
<li> {props.price} </li>
<li> {props.inStock === true ? 'Available' : 'Out of Stock'} </li>
// </ul> */}