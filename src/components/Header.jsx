import React from 'react';

function Header() {
  var parentStyle = {
    fontFamily: 'Barlow, sans-serif',
    color: 'rgb(66, 0, 0, 0.8)',
    textAlign: 'center',
    // display: 'block',
    // marginLeft: 'auto',
    // marginRight: 'auto'
  };
  var childStyle = {
    fontSize: '100',
    marginBottom: '50px',
    textAlign: 'center'

  };
  var thicc = {
    color: '#420000',
    textShadow: '2px 2px #d4d7dd'
  };
  return (
    <div style={parentStyle}>
      <h1 style={childStyle}>epicod<span style={thicc}>Us</span></h1>
    </div>
  );
}

export default Header;