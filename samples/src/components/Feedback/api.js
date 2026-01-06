// src/components/Feedback/api.js
const getBaseUrl = () => {
  // During local development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000/api/feedback';
  }
    
  // In production - using the Heroku app URL
  return 'https://plugin-feedback-d8646ed0b33b.herokuapp.com/api/feedback';
};

export const FeedbackType = {
  LIKE: 'like',
  DISLIKE: 'dislike'
};

export const LikeOptions = {
  ACCURATE: 'Accurately reflects the style and writing guidelines',
  HELPFUL_EXAMPLES: 'Provided helpful examples of writing styles',
  EASY_TO_FOLLOW: 'Easy to follow and comprehend',
  CLEAR_FORMATTING: 'Formatting was clear and consistent',
  USEFUL_TIPS: 'Included useful tips for effective writing',
  POSITIVE_ANOTHER_REASON: 'Another reason (Provide details)'
};

export const DislikeOptions = {
  INACCURATE: 'Doesn\'t accurately reflect the style and writing guidelines',
  NOT_FOUND: 'Couldn\'t find the information I was looking for',
  MISSING_INFO: 'Missing important guidelines or examples',
  HARD_TO_UNDERSTAND: 'Hard to understand or unclear',
  OVERLY_COMPLEX: 'Guidelines were too complex or convoluted',
  EXAMPLES_ERRORS: 'Errors in provided examples or guidelines',
  NEGATIVE_ANOTHER_REASON: 'Another reason (Provide details)'
};


/**
 *
 * Payload: {}
 *
 * page: string
 * type: string
 * options?: string[]
 * comment?: string
 *
 */

export const submitFeedback = async (payload) => {
  try {
    // Notice we're using getBaseUrl() directly without appending /submit
    const response = await fetch(getBaseUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      // Get more detailed error information
      const errorText = await response.text();
      console.error('Server response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error;
  }
};