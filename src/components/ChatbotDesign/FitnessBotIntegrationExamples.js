import React from 'react';
import { ConfigProvider, Popover, Space } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'; 
const content = (
  <div>
    <p>A fitness chatbot can be connected to various integrations to enhance its capabilities and provide a seamless and comprehensive user experience. Some possible integrations for a fitness chatbot include:
    <ol>
        <li><b>Fitness Tracking Apps</b>: Integrating with fitness tracking apps like Fitbit, Garmin, or Apple Health allows the chatbot to access the user's activity data, such as steps taken, calories burned, and workout sessions. This information can be used to personalize workout routines and monitor progress.</li>
        <li><b>Nutrition Databases</b>: Connecting with nutrition databases like USDA Food Composition Database or nutrition APIs enables the chatbot to provide accurate information about the nutritional content of foods and suggest personalized meal plans based on the user's dietary preferences and fitness goals.</li>
        <li><b>E-commerce Platforms</b>: Integrating with e-commerce platforms allows the chatbot to offer a seamless shopping experience for protein powder or other fitness-related products. Users can browse, select, and purchase products directly through the chatbot.</li>
        <li><b>Workout Video Libraries</b>: Integrating with workout video libraries, such as YouTube or specialized fitness platforms, allows the chatbot to recommend exercise tutorials and guided workout videos based on the user's preferences and fitness level.</li>
        <li><b>Social Media Platforms</b>: Integrating with social media platforms like Instagram or Facebook enables the chatbot to share fitness tips, motivational content, and success stories with users. It can also allow users to share their achievements or workout routines on their social media profiles.</li>
        <li><b>Personal Calendars</b>: Integrating with personal calendar apps like Google Calendar or Microsoft Outlook allows the chatbot to schedule and remind users about their workout sessions, providing a convenient way to stay on track with their fitness routines.</li>
        <li><b>Health Data APIs</b>: Integrating with health data APIs or electronic health records (EHR) systems, with user consent, can help the chatbot access relevant health information to offer personalized fitness and nutrition recommendations while considering any pre-existing health conditions or limitations.</li>
        <li><b>Chat Platforms and Messaging Apps</b>: Deploying the fitness chatbot on popular messaging platforms like Facebook Messenger, WhatsApp, or Slack allows users to access fitness support and recommendations directly through their preferred messaging app.</li>
    </ol>
    </p>
    <p>By integrating with these and other relevant platforms, a fitness chatbot can offer a comprehensive and personalized fitness experience to users, supporting them in achieving their health and fitness goals effectively.</p>
  </div>
);
const FitnessIntegrationOptions = () => (
  
    <ConfigProvider
      theme={{
        components: {
          Popover: {
            width: '600px',
          },
        },
      }}
    >
      <Space wrap>
        <Popover content={content} title="Integration Options for a Fitness Chatbot" trigger="hover">
          <sup><QuestionCircleOutlined style={{ fontSize: '12px', color: 'ccc' }} /></sup>
        </Popover>
      </Space>
    </ConfigProvider>

);
export default FitnessIntegrationOptions;