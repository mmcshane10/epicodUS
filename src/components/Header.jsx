import React from 'react';

function Header() {
  var headerStyle = {
    fontFamily: 'Barlow, sans-serif',
    color: 'rgb(66, 0, 0, 0.8)',
    textAlign: 'center',
    fontSize: '100'
  };
  var thicc = {
    color: '#420000',
    textShadow: '2px 2px #d4d7dd'
  };
  return (
    <h1 style={headerStyle}>epicod<span style={thicc}>Us</span></h1>
  );
}

export default Header;