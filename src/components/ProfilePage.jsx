import React from 'react';
import Header from './Header';
import NachoLauren from '../assets/images/nacholauren.jpg';

function ProfilePage() {
  var profileCardStyle = {
    backgroundColor: 'white',
    padding: '50px'
  }
  var headerColor = {
    color: '#420000',
    textAlign: 'center'
  }
  return (
    <div>
      <Header/>
      <div className='container'>
        <div className='card' style={profileCardStyle}>

          <div className='row'>
            <div className='col s6'>
              <img src={NachoLauren}/>
            </div>
            <div className='col s6'>
              <h1 style={headerColor}>Sofia Giordano</h1>
            </div>
          </div>
          <div className='row'>
            <h3 style={headerColor}>Bio</h3>
            <p>This is where the bio will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProfilePage;