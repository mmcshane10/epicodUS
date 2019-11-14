import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';

function Card(props){
  var nameStyle = {
    color: '#420000'
  };
  var buttonStyle = {
    backgroundColor: 'rgb(66, 0, 0, 0.8)',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  return(
    <div className='col s12 m6 l4'>
      <div className='card'>
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={props.img}/>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4" style={nameStyle}>{props.name}<i className="material-icons right">more_vert</i></span>
          <Link style={buttonStyle} to='/profile' className="btn-floating btn-small waves-effect waves-light saddlebrown"><i className="material-icons">person</i></Link>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">About {props.name}<i className="material-icons right">close</i></span>
          <p>{props.bio}</p>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  bio: PropTypes.string,
  name: PropTypes.string
};

export default Card;