import React from 'react';

function Header() {
    var headerStyle = {
        fontFamily: 'Barlow, sans-serif',
        color: 'rgb(66, 0, 0, 0.7)',
        textAlign: 'center',
        fontSize: '60'
    }
    var thicc = {
        color: '#420000'
    }
    return (
        <h1 style={headerStyle}>epicod<span style={thicc}>Us</span></h1>
    );
}

export default Header;