import React from 'react';
import FlippingCard from '../FlippingCard/FlippingCard.js';
import cardData from '../../data/effectiveYamlInputsData.json'; // Import data from JSON

const EffectiveYamlInputs = () => {
  return (
    <div>
      <FlippingCard data={cardData} />
    </div>
  );
};

export default EffectiveYamlInputs;
