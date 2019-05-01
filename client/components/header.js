import React from 'react';
import WoodNavbar from '../containers/WoodNavbar';

const headerStyle = {
  color: 'brown'
}

const Header = () => {
  return (
    <div>
      <WoodNavbar />
      {/* <h1 style={headerStyle} className="header"> Lumber Exotics Co. </h1> */}
    </div>
  );
};

export default Header;
