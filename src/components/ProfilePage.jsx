import React from 'react';
import NachoLauren from '../assets/images/nacholauren.jpg';
import { Link } from 'react-router-dom';


function ProfilePage() {
  var profileCardStyle = {
    backgroundColor: 'white',
    padding: '50px'
  };
  var headerColor = {
    fontFamily: 'Barlow, sans-serif',
    color: 'rgb(66, 0, 0, 0.8)',
    textAlign: 'center'
  };
  var thicc = {
    color: '#420000',
    textShadow: '2px 2px #d4d7dd',
    fontWeight: 'bold'
  };
  var lightBrown = {
    fontFamily: 'Barlow, sans-serif',
    color: 'rgb(66, 0, 0, 0.8)',
    fontWeight: 'bold'
  };
  var darkBrown = {
    color: '#420000'
  };
  var buttonStyle = {
    backgroundColor: 'rgb(66, 0, 0, 0.8)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '50px'
  };

  return (
    
    <div className='container'>
      <div className='card' style={profileCardStyle}>
        <div className='row'>
          <div className='col s6'>
            <img src={NachoLauren}/>
          </div>
          <div className='col s6' style={darkBrown}>
            <h1 style={headerColor}>Lauren <span style={thicc}>Ipsum</span></h1>
            <h5><span style={lightBrown}>LinkedIn:</span> www.linkedin/in/lauren-ipsum</h5>
            <h5><span style={lightBrown}>GitHub:</span> github.com/laurenipsum</h5>
            <h5><span style={lightBrown}>Email:</span> lauren@ipsum.edu</h5>
            <h5><span style={lightBrown}>CageBook:</span> cage.book/ipsum-lauren</h5>
          </div>
        </div>
        <div className='row'>
          <h3 style={headerColor}>Bio</h3>
          <p>This is where the bio will go. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inciddunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <Link style={buttonStyle} to='/' className="btn-floating btn-large waves-effect waves-light saddlebrown"><i className="material-icons">home</i></Link>
        </div>

      </div>
    </div>
  );
}

export default ProfilePage;