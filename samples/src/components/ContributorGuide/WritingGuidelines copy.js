import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  margin: 0,
  height: '300px',
  color: '#fff',
  textAlign: 'center',
  background: '#065e8f',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

const paragraphStyle = {
  fontSize: '16px',
  color: '#fff',
  marginTop: '10px',
};

const WritingGuidelines = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel arrows dots={false} afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
          Focus on the customer intent
          <p style={paragraphStyle}>Understand the needs of the customer to provide them with the right solutions.</p>
          <p style={paragraphStyle}>Understand the needs of the customer to provide them with the right solutions.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Keep it clear and concise
          <p style={paragraphStyle}>Avoid unnecessary complexity, and always aim for clarity in your messaging.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Be engaging and persuasive
          <p style={paragraphStyle}>Use compelling language to maintain the reader's interest and influence decisions.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ensure grammatical correctness
          <p style={paragraphStyle}>Proofread your content to avoid errors that could distract from your message.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ensure grammatical correctness
          <p style={paragraphStyle}>Proofread your content to avoid errors that could distract from your message.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ensure grammatical correctness
          <p style={paragraphStyle}>Proofread your content to avoid errors that could distract from your message.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ensure grammatical correctness
          <p style={paragraphStyle}>Proofread your content to avoid errors that could distract from your message.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ensure grammatical correctness
          <p style={paragraphStyle}>Proofread your content to avoid errors that could distract from your message.</p>
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          Ensure grammatical correctness
          <p style={paragraphStyle}>Proofread your content to avoid errors that could distract from your message.</p>
        </h3>
      </div>
    </Carousel>
  );
};

export default WritingGuidelines;
