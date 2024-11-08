import React from 'react';

const NovelCard = ({ image, title, description }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', textAlign: 'center', width: '200px', margin: '15px' }}>
      <img src={image} alt={title} style={{ width: '100%', borderRadius: '10px' }} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default NovelCard;
