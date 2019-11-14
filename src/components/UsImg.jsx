import React from 'react';
import Us from '../assets/images/Us.jpg';

function UsImg() {
    var usImgStyle = {
        backgroundImage: `url(${Us})`,
        backgroundAttachment: 'fixed',
        height: '800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    };
    return (
        <div style={usImgStyle}>
        </div>
    );
}

export default UsImg;