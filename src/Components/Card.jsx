import React from 'react';
import './Components.css';

const Card = (props) => {
  return (
    <div className="card">
      
      <div className="card-content">
        <h2 className="card-title">{props.name}</h2>
        <p className="card-description">{props.company}</p>
        <button className="card-button" >Explore
        </button>
      </div>
    </div>
  );
};

export default Card;
