import React, { useState } from 'react';
import { Space, Button, ConfigProvider, Drawer } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons'; 
import FitnessIntegrationOptions from './FitnessBotIntegrationExamples';
import styles from '@site/src/components/ChatbotDesign/styles.module.css';

const PersonalizedWorkoutRequirements = () => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showDefaultDrawer = () => {
    setSize('default');
    setOpen(true);
  };
  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
          <Space wrap align='center' direction="vertical">
              <ConfigProvider
              
                theme={{
                  token: {
                      colorPrimary: '#6e815e',
                      colorPrimaryHover: '#244651',
                      colorTextBase: '#fff',
                      
                    }
                  }
                }
              >
                <Button type="primary" onClick={showLargeDrawer} shape="round">
      <b>Dive Deeper into the Requirements!</b>
      </Button>
              </ConfigProvider>
              </Space>
      
      <Drawer title="Requirements for 'Ryan, Your Fitness Ally!'" placement="right"
        size={size}
        onClose={onClose}
        open={open}>
                    <h2>Scope</h2>
                    <ol>
                        <li>
                            <b>Designing a Custom Workout Routine:</b>
                            <ul>
                                <li>The bot will interact with users to understand their fitness goals, current fitness level, preferences, and physical limitations.</li>
                                <li>It will create a personalized workout routine tailored to each user's needs and objectives.</li>
                                <li>The workout plans will cover various exercises, intensity levels, and progression as users advance their fitness journey.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Offering Protein Powder Recommendations:</b>
                            <ul>
                                <li>
                                    After the workout routine is designed, the bot will recommend suitable protein powder products based on the user's fitness goals, dietary preferences, and any specific requirements they may have.
                                </li>
                                <li>It will provide information about the benefits of protein powder, different flavors, and the types available.</li>
                            </ul>
                        </li>
                        <li>
                            <b>AI-driven Adaptability:</b>
                            <ul>
                                <li>The bot will leverage AI technology to adapt workout plans based on the user's progress, feedback, and performance.</li>
                                <li>It will dynamically adjust the routines to ensure they remain effective and challenging.</li>
                            </ul>
                        </li>
                        <li>
                            <b>Fitness Support and Motivation:</b>
                            <ul>
                                <li>The bot will serve as a fitness ally, providing constant support, encouragement, and motivation throughout the user's journey.</li>
                                <li>It will offer tips, advice, and reminders to help users stay on track with their fitness goals.</li>
                            </ul>
                        </li>
                    </ol>
                    <h2>Impact</h2>
                    <p>
                        The impact of FitFuel+ can be significant. By offering tailored workout routines, users are more likely to stay motivated, focused, and consistent in their fitness journey. The customized approach will help users see
                        better results and minimize the risk of injuries. Additionally, the bot's protein powder recommendations ensures users can access quality products that complement their workouts and support muscle recovery.
                    </p><br />
                    <ul>
                        <li>
                            <strong>Empowerment:</strong> FitFuel+ will empower individuals to take control of their fitness journey, making it accessible and effective for people with different fitness levels and goals.
                        </li>
                        <li><strong>Personalization:</strong> Customized workout routines and protein powder recommendations will improve results and increase user satisfaction.</li>
                        <li><strong>Consistency:</strong> The bot's constant support and adaptability will foster consistency in users' workout routines, enhancing their chances of success.</li>
                        <li>
                            <strong>Improved Physical Well-being:</strong> By providing personalized fitness plans and quality protein powder, FitFuel+ will improve muscle building, endurance, and overall physical health.
                        </li>
                        <li>
                            <strong>Healthier Lifestyle:</strong> The impact of FitFuel+ will extend beyond fitness, encouraging users to adopt a healthier lifestyle through regular exercise and proper nutrition.
                        </li>
                    </ul><br />
                    <h2>Requirements</h2>
                    <h3>What is the purpose of the bot?</h3>
                    <p>
                        The chatbot aims to be a comprehensive fitness and nutrition assistant, supporting individuals in achieving their health and fitness goals. The bot offers numerous benefits to its users, making it an indispensable
                        tool for individuals striving to get in shape and adopt a healthier lifestyle:<br /><br />
                    </p>
                    <ol>
                        <li><strong>Custom Workout Routines:</strong> Our chatbot creates personalized workout plans for each user based on their fitness level, goals, and preferences, ensuring effective and enjoyable workouts.</li>
                        <li><strong>24/7 Availability:</strong> The chatbot is always available for fitness support and guidance, no matter where or when users need it.</li>
                        <li><strong>Expert Guidance:</strong> Our chatbot provides professional insights and guidance tailored to each user's needs and progress, leading to optimized workout experiences.</li>
                        <li><strong>Adaptive Plans:</strong> The chatbot uses AI technology to adapt workout plans based on user feedback and progress, ensuring routines remain challenging and relevant.</li>
                        <li><strong>Motivation:</strong> Our chatbot offers consistent motivation and encouragement, helping users stay committed to their fitness goals.</li>
                        <li><strong>Protein Powder Recommendations:</strong> The chatbot recommends top-quality protein powder products based on users' fitness goals and dietary preferences for proper nutrition.</li>
                        <li><strong>Accountability:</strong> Our chatbot acts as a reliable accountability partner, helping users stay on track with their fitness routines and encouraging progress.</li>
                        <li><strong>Educational Content:</strong> The chatbot provides informative content on fitness topics to help users understand the importance of exercise, nutrition, and overall well-being.</li>
                        <li><strong>Progress Tracking:</strong> Users can track their progress within the app, seeing tangible improvements over time and staying motivated to reach their goals.</li>
                    </ol>
                    <p></p>
                    <h3>For which department are you designing the bot?</h3>
                    <p>The bot is designed for FitFuel+'s Digital Marketing, Customer Support, and Product Development departments.</p><br />
                    <h3>Who are the stakeholders?</h3>
                    <p>The stakeholders for the creation of the FitFuel+ bot would typically include:<br /><br />
                    <ol>
                        <li>
                            <strong>Marketing Team: </strong>They are responsible for promoting the FitFuel+ brand and products. The bot will be a valuable tool for engaging potential customers, providing fitness information, and offering
                            personalized workout routines and protein powder recommendations. The marketing team will ensure that the bot aligns with the company's marketing strategies and messaging.
                        </li>
                        <li>
                            <strong>Product Development Team:</strong> The product development team will integrate the chatbot's features into the FitFuel+ app. They will work closely with the bot development team to ensure a seamless
                            user experience and the bot's proper alignment with other app functionalities.
                        </li>
                        <li>
                            <strong>Customer Support Team: </strong>The chatbot will act as a virtual fitness expert, answering customer queries, providing guidance on workout plans and protein powder options, and addressing any customer
                            support issues related to the app. The customer support team will collaborate with the bot development to ensure that it can effectively handle common customer inquiries and escalations.
                        </li>
                        <li>
                            <strong>Business Development Team:</strong> The business development team may identify potential partnerships or collaborations where the chatbot can enhance FitFuel+'s services, such as integrating with
                            fitness wearables or partnering with gyms or fitness centers.
                        </li>
                        <li>
                            <strong>Management and Leadership:</strong> The management and leadership of FitFuel+ will play a crucial role in defining the bot's goals, overall strategy, and alignment with the company's mission and
                            values.
                        </li>
                        <li>
                            <strong>Customers:</strong> Ultimately, the customers of FitFuel+ are key stakeholders. Their feedback and satisfaction with the chatbot will be essential in driving the success and continuous improvement of the
                            bot.
                        </li>
                    </ol></p>
                    <p>
                        These stakeholders will collaborate to ensure that the FitFuel+ chatbot fulfills its purpose, delivers an exceptional user experience, and aligns with the company's objectives of supporting people in their
                        fitness journey and providing high-quality protein shakes.
                    </p><br />
                    <h3>Who is the intended audience?</h3>
                    <p>
                        The bot's intended audience is individuals actively seeking to get in shape, improve their physical fitness, and adopt a healthier lifestyle. They may have varying levels of fitness experience, from beginners to
                        more experienced individuals.
                    </p><br />
                    <h3>What are the 3-5 key use cases (intents) the bot will help users accomplish?</h3>
                    <ol>
                        <li>
                            <strong>Custom Workout Routine Intent (main flow)</strong>: This intent focuses on designing a personalized workout routine for users based on their fitness level, goals, preferences, and constraints. The bot
                            will ask relevant questions to gather information and generate a tailored workout plan.<br /><br />
                            <details open="">
                                <summary><strong>What questions would you ask to guide users on key intent 1?</strong></summary><br />
                                <ul>
                                    <li>What is your current fitness level? (beginner, intermediate, advanced)</li>
                                    <li>What are your fitness goals? (lose weight, gain muscle, improve strength, improve endurance, etc.)</li>
                                    <li>What are your exercise preferences? (cardio, strength training, yoga, Pilates, etc.)</li>
                                    <li>Do you have any injuries or limitations?</li>
                                    <li>What is your budget?</li>
                                    <li>How much time do you have to commit to working out each week?</li>
                                </ul>
                                <br />
                                <p>Once Ryan has these details, he'll design a custom workout routine that aligns perfectly with your goals and abilities. If the user is underage or their age suggests they may have specific needs or considerations, Ryan will emphasize the importance of consulting with a healthcare professional or fitness expert before beginning any exercise program. Safety and well-being always come first, and Ryan will guide users to make informed decisions on their fitness journey.</p>
                            </details><br />
                        </li>
                        <li>
                            <strong>Protein Powder Recommendation Intent (secondary flow)</strong>: This intent revolves around recommending suitable protein powder options to users as a post-workout supplement. The bot can provide
                            information about the benefits of protein powder, the different flavors and types available, and suggest specific products based on the user's fitness goals and dietary preferences.<br /><br />
                            <details open="">
                                <summary><strong>What questions would you ask to guide users on key intent 2?</strong></summary><br />
                                <ul>
                                    <li>What are your fitness goals? (lose weight, gain muscle, improve strength, etc.)</li>
                                    <li>What type of protein powder are you looking for? (whey, casein, plant-based, etc.)</li>
                                    <li>What flavors do you prefer?</li>
                                    <li>Do you have any dietary restrictions? (e.g., lactose intolerance, soy allergy, etc.)</li>
                                    <li>How much protein do you need per day?</li>
                                    <li>How often do you work out?</li>
                                    <li>How much money are you willing to spend on protein powder?</li>
                                </ul><br />
                                <p>Once the bot has gathered this information, it can use it to recommend specific protein powders that are tailored to the user's individual needs and goals.</p>
                            </details>
                            <br />
                        </li>
                        <li>
                            <strong>Exercise Guidance Intent (secondary flow)</strong>: This intent aims to provide guidance and instructions to users while they perform their workout routines. The bot can offer videos on exercise
                            demonstrations, proper form techniques, breathing techniques, and modifications/adaptations for different fitness levels.<br /><br />
                            <details open="">
                                <summary><strong>What questions would you ask to guide users on key intent 3?</strong></summary><br />
                                <ul>
                                    <li>What exercise are you interested in learning more about?</li>
                                    <li>What are your fitness goals for this exercise?</li>
                                    <li>Do you have any injuries or limitations that I should be aware of?</li>
                                    <li>What is your current fitness level?</li>
                                    <li>What type of guidance are you looking for? (e.g., video demonstration, form tips, breathing techniques, modifications)</li>
                                </ul><br />
                                <p>Once the bot has gathered this information, it can provide the user with the most relevant guidance and instructions. For example, if the user is interested in learning how to do a squat, the bot could provide a video demonstration of the proper form, tips on how to breathe correctly, and modifications for beginners.</p>
                            </details>
                            <br />
                        </li>
                        <li>
                            <strong>Tracking progress:</strong> This intent aims to help users track their fitness progress over time. The bot can help users track their workout frequency, duration, intensity, and weight loss/gain. It can also help users track their progress towards specific fitness goals, such as running a marathon or lifting a certain amount of weight.<br /><br />
                            <details open="">
                                <summary><strong>What questions would you ask to guide users on key intent 3?</strong></summary><br />
                                <ul>
                                    <li>How often do you work out each week?</li>
                                    <li>What is the average duration of your workouts?</li>
                                    <li>How would you rate the intensity of your workouts?</li>
                                    <li>Have you noticed any changes in your weight or body composition?</li>
                                    <li>How are you feeling overall?</li>
                                </ul><br />
                                <p>Once the bot has gathered this information, it can help the user set up a tracking system that is tailored to their individual needs and goals. For example, if the user is tracking their progress towards running a marathon, the bot could help them track their mileage, pace, and time.</p>
                            </details><br />
                        </li>
                        <li><strong>Fitness challenge</strong>: This intent aims to motivate users to achieve their fitness goals by participating in challenges. The bot can create personalized challenges for users based on their fitness level, goals, and preferences. The bot can also provide support and encouragement throughout the challenge.
                        <br /><br />
                        <details open="">
                                <summary><strong>What questions would you ask to guide users on key intent 5?</strong></summary><br />
                                <ul>
                                   
                                    <li>What is your fitness goal?</li>
                                    <li>What type of challenge would you like to participate in?</li>
                                    <li>What are your constraints (e.g., time, equipment, budget)?</li>
                                    <li>What support do you need from me?</li>
                                    <li>How can I help you stay motivated?</li>
                                            
                                </ul><br />
                                <p>Once the bot has gathered this information, it can create a personalized challenge for the user that is tailored to their individual needs and goals. For example, if the user wants to lose weight, the bot could create a challenge that includes a mix of cardio and strength training workouts.</p>
                            </details>
                        </li>
                    </ol>
                    <p>These intents focus on the core functionalities of the bot, which involve designing workout routines, guiding users during exercises, and offering protein powder recommendations. There can be additional intents such as tracking progress, answering FAQs, and providing nutritional advice.</p>
                    <br />       
                    <h3>What determines the success of the bot?</h3>
                    <p>To measure the bot's success, you can consider the following metrics:</p><br />
                    <ol>
                        <li>
                            <strong>User Engagement</strong>: Tracking the number of interactions, session duration, and repeat usage can indicate how interested users are in the bot. Higher engagement means users find the bot valuable.
                        </li>
                        <li><strong>User Feedback and Satisfaction</strong>: Surveys, ratings, or reviews can provide insights into user satisfaction. Positive feedback and high scores suggest the bot meets users' needs.</li>
                        <li>
                            <strong>Completion of Custom Workout Routines</strong>: The rate of users successfully completing the custom workout routines can indicate the bot's effectiveness. A higher completion rate means users find
                            the routines valuable.
                        </li>
                        <li>
                            <strong>Protein Powder Sales</strong>: Tracking the conversion rate and sales of protein powder can be a measure of the bot's ability to drive sales. Higher sales indicate the bot encourages users to buy the
                            protein powder.
                        </li>
                        <li>
                            <strong>User Progress and Results</strong>: Gathering data on user progress, such as fitness milestones achieved, can help evaluate the bot's impact. Positive progress suggests the bot's recommendations
                            are contributing to users' goals.
                        </li>
                        <li>
                            <strong>Retention and Repeat Usage</strong>: Monitoring the rate of returning users and repeat interactions can indicate the bot's ability to retain users' interest. Higher retention and repeat usage
                            suggest users find the bot beneficial.
                        </li>
                    </ol>
                    <p>
                        Continuous monitoring and gathering of user feedback provides valuable insights for further improvements and enhancements to the bot's functionality and offerings.
                    </p><br />
                    <h2>Explore technology</h2>
                    <table className={styles.tableDrawer}>
                        <tbody>
                            <tr>
                                <th><strong>Platform</strong></th>
                                <td>
                                    Which conversational platform do we use for this project? Platform examples include DialogFlow, Bot Framework, IBM Watsom, RASA, and Nuance.<br /><br />Which other platforms does the organization use?
                                </td>
                                <td>Voiceflow<br />DialogFlow</td>
                            </tr>
                            <tr>
                                <th><strong>Integrations</strong> <FitnessIntegrationOptions /></th>
                                <td>
                                    Which backend integrations are there?<br /><br />Which are viable in the near future? As a conversation designer, you must understand what's possible, which functionality you have to work with, and
                                    what's coming out in the future.<br /><br /><b>Examples:</b><ul><li>CRM system like Salesforce</li><li>Booking systems</li><li>E-commerce systems</li><li>News channels</li></ul>
                                </td>
                                <td><ul><li>E-commerce system (protein powder)</li><li>Fitness tracking apps (Fitbit, Garmin, or Apple Health)</li><li>Nutrition databases (USDA Food Composition Database or nutrition APIs)</li><li>Personal calendars (Google Calendar, Microsoft Outlook, or Yahoo Calendar)</li><li>Social media platforms (Instagram, Facebook, or TikTok)</li><li>Payment systems (PayPal)</li></ul>
                                </td>
                            </tr>
                            <tr>
                                <th><strong>Channel</strong></th>
                                <td>
                                    On which channels is your bot active? <br /><br /><b>Examples:</b><ul><li>Chatbot on website</li><li>Chatbot on Facebook, WeChat</li><li>Voice assistant on Google Home device</li><li>Voice assistant on Amazon’s echo</li><li>Chatbot or voice assistance
                                    within a mobile app</li></ul> 
                                </td>
                                <td><ul><li>Chatbot on website</li><li>Chatbot within mobile app</li><li>Chatbot on Facebook Chatbot on WeChat</li></ul>  </td>
                            </tr>
                            <tr>
                                <th><strong>User identifications</strong></th>
                                <td>
                                    How is the user identified when interacting with the bot? <br /><br /><b>Examples:</b><ul><li>The user is logged in</li><li>The user is not logged in and stays anonymous</li><li>The user is anonymous and needs to be identified by voice recognition</li><li>The user needs to log in via chat using its credentials</li></ul> 
                                </td>
                                <td><ul><li>The user is logged in</li><li>The user needs to log in via chat using its credentials</li></ul><br /><br /><b>Future:</b><ul><li>The user is not logged in and stays anonymous (guest checkout)</li></ul></td>
                            </tr>
                            <tr>
                                <th><strong>Handover options</strong></th>
                                <td>
                                    What possibilities does the bot have regarding handing over the conversation to a live agent or another bot? <br /><br /><b>Examples:</b><ul><li>Handing over complicated service questions to live chat agent</li><li>Handing over
                                    high-value sales conversations to a call center agent</li><li>Handing over to task-specific bots of other brands</li><li>Handing over to meta bots like Google Assistant</li></ul> 
                                </td>
                                <td><ul><li>Handing over complicated service or account questions to live chat agent</li><li>Handing over high-value sales conversations to a call center agent</li><li>Handing over to task-specific bots of other brands</li><li>Handing over to a live chat agent to check the status of an order</li></ul> 
                                    
                                </td>
                            </tr>
                            <tr>
                                <th>Data analytics</th>
                                <td>Will data be used for purposes other than the bot project? Does the platform provide optimization advice on how to improve certain flows and how to avoid intent overlap?</td>
                                <td>
                                    Responsible and ethical data use is crucial; therefore, FitFuel+ should use data collected from analytics tools to improve bot performance, user engagement, and overall experience. A comprehensive privacy
                                    policy outlining data collection, storage, usage, user rights, and opt-out options is necessary. Voiceflow also provides guidance and optimization advice through its built-in tools and features.
                                </td>
                            </tr>
                        </tbody>
                    </table>
      </Drawer>
    </>
  );
};
export default PersonalizedWorkoutRequirements;