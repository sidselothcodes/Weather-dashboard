import React from 'react';
// import './styles.css';

const MediumBox = ({ title, content }) => {
  return (
    <div className="medium-box">
      <h2 className="title">{title}</h2>
      <p className="content">{content}</p>
    </div>
  );
};

export default MediumBox;
