---
id: feedback-component
title: Feedback Component
description: 'Learn about the Feedback component used in the Alchemy user documentation.'
keywords:
 - custom component
 - feedback
last_updated:
  date: 08/15/2024
  author: Patricia McPhee
doc_type: how-to
displayed_sidebar: maintainerHandbookSidebar
draft: true
---

In this document, you'll find a comprehensive explanation of the `Feedback` component used in conjunction with Docusaurus. This document aims to help the doc site maintainers understand the `Feedback` component, facilitate API integration, and troubleshoot potential issues effectively.

This component provides a user interface for collecting feedback on documentation pages. It allows users to submit feedback via a modal form, capturing both positive or negative sentiments and specific details about the user experience.

## Key Features

- Collects user feedback with options for likes and dislikes.
- Allows users to provide additional details through checkboxes and text fields.
- Displays feedback submission status using modals.
- Integrates with an API endpoint to submit feedback data.
- Utilizes Docusaurus metadata for context.

## Component Structure

The component is structured into several parts:

1. **Theme Setup:** Custom MUI theme for consistent styling of MUI components.
2. **ReportIssueUrl:** Provides a link to report issues in submitting feedback.
3. **FeedbackModal:** Handles user input for feedback.
4. **ThankYouModal:** Displays a confirmation after successful feedback submission.
5. **OopsModal:** Displays an error message if feedback submission fails with an option to open a GitHub issue to report the error.
6. **Feedback:** Integrates all parts and handles state and API interactions.


## Dependencies

The component relies on the following dependencies:

- **React:** The core library for building user interfaces.
- **Material UI (MUI):** A React UI framework used for creating the component's user interace elements.
- **Docusaurus:** The static site generator for which this component is designed.
- **MUI Icons:** Provides icons like `ThumbUpIcon`, `ThumbDownIcon`, and `CloseIcon`.
- **React Hooks:** `useState`, `useMediaQuery`, and custom hooks to manage component state and responsiveness.

## Detailed Code Explanation

### Theme Configuration

MUI is used extensively to style the interface components. There are several MUI components that utilize inline styles to achieve specific visual formatting. The inline styles are specified directly within the component using the `sx` prop or the `style` attribute. 

A custom MUI theme is created to define primary and secondary color palettes for MUI components used in the component.

:::note
We plan to create a theme file for the MUI components used throughout the site. 
:::

```javascript
...
const theme = createTheme({
  palette: {
    primary: {
      main: '#0886cc',
    },
    secondary: {
      main: '#71c258',
      light: '#83ca6d',
      contrastText: '#e3f3ef',
    },
  },
});
...
```



### Feedback Component

The `Feedback` component is the primary component that users interact with. It manages the state of the feedback process, including opening and closing modals and handling feedback submission.

```javascript
...
const Feedback = () => {
  // State variables for modal visibility and feedback data
  const [likeModalOpen, setLikeModalOpen] = useState(false);
  const [dislikeModalOpen, setDislikeModalOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    liked: {},
    disliked: {}
  });
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
  const [oopsModalOpen, setOopsModalOpen] = useState(false);

  // Use metadata from Docusaurus
  const { metadata } = useDoc();

  // Function to handle feedback changes
  const handleFeedbackChange = (type, optionLabel, checked) => {
    setFeedbackData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [optionLabel]: checked,
        [`${optionLabel}_details`]: checked ? prev[type][`${optionLabel}_details`] : ''
      }
    }));
  };

  // Function to handle text changes
  const handleTextChange = (type, optionLabel, text) => {
    setFeedbackData((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [`${optionLabel}_details`]: text
      }
    }));
  };

  // Function to clear feedback data
  const clearFeedbackData = () => {
    setFeedbackData({
      liked: {},
      disliked: {}
    });
  };

  // Function to handle like feedback submission
  const handleLikeSubmit = () => {
    submitFeedback(true, 'liked');
    setLikeModalOpen(false);
    clearFeedbackData();
  };

  // Function to handle dislike feedback submission
  const handleDislikeSubmit = () => {
    submitFeedback(false, 'disliked');
    setDislikeModalOpen(false);
    clearFeedbackData();
  };

  // Function to submit feedback
  const submitFeedback = async (thumbsUp, feedbackType) => {
    const checkboxes = Object.keys(feedbackData[feedbackType]).filter(key => feedbackData[feedbackType][key]);
    const textField = checkboxes.map(option => feedbackData[feedbackType][`${option}_details`] || '').join(' ');

    const feedbackPayload = {
      page: metadata.title || 'Unknown Page', // Use metadata title or fallback
      thumbsUp,
      checkboxes,
      textField
    };

    try {
      // Send feedback to the server
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackPayload)
      });

      // Handle response status
      if (response.ok) {
        setThankYouModalOpen(true);
      } else {
        console.error('Failed to submit feedback:', response.statusText);
        setOopsModalOpen(true);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setOopsModalOpen(true);
    }
  };

  // Define like options
  const likeOptions = [
    'Quickly found what I was looking for',
    'Helped me resolve an issue',
    'Easy to follow and comprehend',
    'Code samples were clear',
    'Convinced me to adopt the platform',
    'Another reason'
  ].map(label => ({
    label,
    hasTextField: label.includes('Another reason'),
    checked: feedbackData.liked[label] || false,
    onChange: (checked) => handleFeedbackChange('liked', label, checked),
    onTextChange: (text) => handleTextChange('liked', label, text)
  }));

  // Define dislike options
  const dislikeOptions = [
    'Couldn\'t find what I was looking for',
    'Missing important information',
    'Hard to understand',
    'Too complicated or unclear',
    'Code sample errors',
    'Another reason'
  ].map(label => ({
    label,
    hasTextField: label.includes('Another reason'),
    checked: feedbackData.disliked[label] || false,
    onChange: (checked) => handleFeedbackChange('disliked', label, checked),
    onTextChange: (text) => handleTextChange('disliked', label, text)
  }));

  // Render the feedback UI
  return (
    <div className="container feedbackContainer">
      <div className="row">
        <div className='col'>
          <div className="col-demo">
            <h4>Was this page helpful?</h4>
            <div className='iconContainer'>
              <IconButton aria-label="yes" onClick={() => setLikeModalOpen(true)}>
                <ThumbUpIcon color='success' />
              </IconButton>
              <IconButton aria-label="no" onClick={() => setDislikeModalOpen(true)}>
                <ThumbDownIcon color="error" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <FeedbackModal
        open={likeModalOpen}
        onClose={() => setLikeModalOpen(false)}
        options={likeOptions}
        title="What did you like?"
        onSubmit={handleLikeSubmit}
      />
      <FeedbackModal
        open={dislikeModalOpen}
        onClose={() => setDislikeModalOpen(false)}
        options={dislikeOptions}
        title="What went wrong?"
        onSubmit={handleDislikeSubmit}
      />
      <ThankYouModal open={thankYouModalOpen} onClose={() => setThankYouModalOpen(false)} />
      <OopsModal open={oopsModalOpen} onClose={() => setOopsModalOpen(false)} />
    </div>
  );
};
...
```

### FeedbackModal Component

The `FeedbackModal` is a reusable component used for displaying feedback options. It supports responsive design adjustments for small screens and handles dynamic content based on props.

```javascript
...
const FeedbackModal = ({ open, onClose, options, title, onSubmit }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
    >
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isSmallScreen ? '90%' : 'auto',
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        <Typography id="modal-title" variant="h6" component="h2" sx={{ color: '#333333', fontWeight: 700, marginBottom: '0.5em', textAlign: 'center' }}>{title}</Typography>
        <FormControl component="fieldset" variant="standard" sx={{ width: '100%' }}>
          <FormGroup>
            {options.map((option, index) => (
              <React.Fragment key={index}>
                <FormControlLabel
                  control={<Checkbox checked={option.checked} onChange={(e) => option.onChange(e.target.checked)} theme={theme} color="primary" />}
                  label={<Typography sx={{ fontSize: '14px', color: '#333333' }}>{option.label}</Typography>}
                  sx={{ alignItems: 'center' }}
                />
                {option.hasTextField && option.checked && (
                  <TextField
                    sx={{ fontSize: '12px', marginTop: '1em' }}
                    fullWidth
                    id="standard-multiline-static"
                    size="small"
                    multiline
                    rows={5}
                    variant="filled"
                    onChange={(e) => option.onTextChange(e.target.value)}
                    placeholder="Provide more details"
                  />
                )}
              </React.Fragment>
            ))}
          </FormGroup>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1em' }}>
            <Button theme={theme} color="primary" size="small" variant="contained" onClick={onSubmit} sx={{ borderRadius: '12px' }}>Submit</Button>
          </Box>
        </FormControl>
      </Box>
    </Modal>
  );
};
...
```

### ThankYouModal and OopsModal Components

These components are simple modals that display messages to the user after feedback submission, indicating success or failure.

### ThankYouModal

Displays a confirmation after successful feedback submission.

```javascript
...
const ThankYouModal = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="thank-you-modal-title"
  >
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      textAlign: 'center'
    }}>
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <Typography id="thank-you-modal-title" variant="h4" component="h2" sx={{ marginBottom: '0.5em' }}>
        Thank you for your feedback!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1em' }}>
        It helps us improve our technical content and user experience.
      </Typography>
    </Box>
  </Modal>
);
...
```


### OopsModal

Displays an error message if feedback submission fails, with an option to report the issue.

```javascript
...
const OopsModal = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="oops-modal-title"
  >
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: 4,
      textAlign: 'center',
      color: '#333333'
    }}>
      <IconButton
        sx={{ position: 'absolute', top: 8, right: 8 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <Typography id="oops-modal-title" variant="h4" component="h2" sx={{ marginBottom: '0.5em' }}>
        Oops!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1em' }}>
        It seems there was an issue with submitting your feedback.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1em' }}>
        Try again or <ReportIssueUrl onClose={onClose} />.
      </Typography>
    </Box>
  </Modal>
);
...
```

### ReportIssueUrl Component

Provides a link to create a GitHub issue when encountering issues during feedback submission.

```javascript
...
function ReportIssueUrl({ onClose }) {
  const reportIssueUrl = `https://github.sys.cigna.com/cigna/alchemy-docs/issues/new?title=Issue submitting feedback.`;
  return (
    <a
      href={reportIssueUrl}
      target="_blank"
      rel="noreferrer noopener"
      onClick={onClose} // Close modal after link click
    >
      <Translate
        id="theme.common.openDocIssue"
        description="The link label to report an issue with submitting feedback"
      >
        Report the issue
      </Translate>
    </a>
  );
}
...
```

## Props Used in FeedbackModal

The `FeedbackModal` component uses the following props:


| Prop       | Type     | Description  |
|------------|----------|---------|
| `open`     | boolean  | Determines if the modal is open.       |
| `onClose`  | function | Callback to close the modal.       |
| `options`  | array    | Array of feedback options with labels and handlers.       |
| `title`    | string   | Title of the modal.        |
| `onSubmit` | function | Handler function for submitting feedback.        |


## API Integration

The feedback data is submitted to a backend API endpoint at `/api/feedback`. The API expects a POST request with the following JSON payload:

### Feedback Payload

```json
{
  "page": "Page Title",
  "thumbsUp": true,
  "checkboxes": ["Option1", "Option2"],
  "textField": "Additional comments provided by the user"
}

```

### Example API Call

The feedback data is submitted using the Fetch API:

```javascript
...
const response = await fetch('/api/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(feedbackPayload)
});
...
```

### API Response Handling

- **Success**: On a successful response (`response.ok`), the `ThankYouModal` is opened.
- **Failure**: If the response is unsuccessful or an error occurs, the `OopsModal` is opened.


## Troubleshooting

- **Ensure the API endpoint is correctly configured** and accessible from the client side.
- **Check network requests** in the browser's developer tools to debug submission issues.
- **Verify the server logs** for any errors or exceptions during feedback processing.
- **Modal Not Opening**: Ensure that the modal states (`likeModalOpen`, `dislikeModalOpen`, etc.) are correctly updated.
- **Feedback Not Submitting**: Check network logs for any errors in the API request. Verify that the server endpoint is configured correctly.
- **Errors in Text Input**: Ensure that `handleTextChange` correctly updates the state for text fields.