import React, { useMemo, useState } from 'react';
import {
  Modal,
  IconButton,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Box,
  TextField,
  useMediaQuery
} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { createTheme } from '@mui/material/styles';
import { DislikeOptions, LikeOptions, submitFeedback } from './api';
import { FeedbackType } from './api';
import { useDoc } from '@docusaurus/theme-common/internal';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeClassNames } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

// Enhanced theme with better mobile support
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
  components: {
    // Optimize button sizes for touch targets
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: '12px', // Larger touch target
        },
      },
    },
    // Enhance checkbox visibility on mobile
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: '9px', // Larger touch target
        },
      },
    },
    // Improve form controls for mobile
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: '-9px', // Compensate for larger checkbox
        },
      },
    },
  },
});

// Component for the "Report the Issue" link - now with better touch target
const ReportIssueUrl = ({ onClose }) => {
  const reportIssueUrl = 'https://github.com/patriciamcphee/smart-search-plugin-demo/issues/new?title=Issue submitting feedback.';
  return (
    <a
      href={reportIssueUrl}
      target="_blank"
      rel="noreferrer noopener"
      className={ThemeClassNames.common.editThisPage}
      onClick={onClose}
      style={{ padding: '8px', display: 'inline-block' }} // Larger touch target
    >
      <Translate
        id="theme.common.openDocIssue"
        description="The link label to report an issue with submitting feedback"
      >Report the issue
      </Translate>
    </a>
  );
};

// Enhanced modal components with better mobile support
const ModalBox = ({ children, maxWidth = '90%' }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    
  return (
    <Box sx={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: isSmallScreen ? maxWidth : 'auto',
      bgcolor: 'background.paper',
      boxShadow: 24,
      p: isSmallScreen ? 2 : 4, // Adjusted padding for mobile
      maxHeight: '90vh',
      overflowY: 'auto',
      borderRadius: '8px', // Rounded corners
      margin: isSmallScreen ? '16px' : 0, // Prevent touching screen edges
      minWidth: isSmallScreen ? 'unset' : '300px',
    }}>
      {children}
    </Box>
  );
};

const ThankYouModal = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="thank-you-modal-title"
  >
    <ModalBox maxWidth="85%">
      <IconButton
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          padding: '12px',
        }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        id="thank-you-modal-title"
        variant="h4"
        component="h2"
        sx={{
          marginBottom: '0.5em',
          fontSize: { xs: '1.5rem', sm: '2rem' },
          color: '#333333',
        }}
      >
                Thank you for your feedback!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1em', color: '#333333' }}>
                It helps us improve our technical content and user experience.
      </Typography>
    </ModalBox>
  </Modal>
);

const OopsModal = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="oops-modal-title"
  >
    <ModalBox maxWidth="85%">
      <IconButton
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          padding: '12px',
        }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <Typography
        id="oops-modal-title"
        variant="h4"
        component="h2"
        sx={{
          marginBottom: '0.5em',
          fontSize: { xs: '1.5rem', sm: '2rem' },
          color: '#333333',
        }}
      >
                Oops!
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1em', color: '#333333' }}>
                It seems there was an issue with submitting your feedback.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '1em', color: '#333333' }}>
                Try again or<ReportIssueUrl onClose={onClose} />
      </Typography>
    </ModalBox>
  </Modal>
);

const Feedback = () => {
  const [feedbackType, setFeedbackType] = useState(null);
  const [feedbackOptions, setFeedbackOptions] = useState([]);
  const [textData, setTextData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [thankYouModalOpen, setThankYouModalOpen] = useState(false);
  const [oopsModalOpen, setOopsModalOpen] = useState(false);
  const { metadata } = useDoc();

  const handleFeedbackChange = (feedback, checked) => {
    if (checked) {
      setFeedbackOptions(prev => [...prev, feedback]);
    } else {
      setFeedbackOptions(prev => prev.filter(e => e !== feedback));
    }
  };

  const submitModal = async () => {
    if (isSubmitting) return; // Prevent double submission
        
    setIsSubmitting(true);
    try {
      const feedbackData = {
        page: metadata.slug,
        type: feedbackType,
        options: feedbackOptions,
        comment: textData.trim()
      };
            
      await submitFeedback(feedbackData);
            
      // Reset form and show success message
      setFeedbackType(null);
      setFeedbackOptions([]);
      setTextData('');
      setThankYouModalOpen(true);
    } catch (error) {
      console.error('Error in submitModal:', error);
      setFeedbackType(null);
      setOopsModalOpen(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const options = useMemo(() => {
    if (feedbackType === FeedbackType.LIKE) return LikeOptions;
    if (feedbackType === FeedbackType.DISLIKE) return DislikeOptions;
    return {};
  }, [feedbackType]);

  return (
    <div className="container">
      <div className="row">
        <div className='col'>
          <div className="col-demo">
            <Typography
              variant="h4"
              component="h4"
              sx={{
                fontSize: { xs: '1rem', sm: '1.25rem' },
                marginBottom: '1rem',
              }}
            >
                            Was this page helpful?
            </Typography>
            <IconButton
              aria-label="yes"
              onClick={() => setFeedbackType(FeedbackType.LIKE)}
              sx={{ marginRight: 1 }}
            >
              <ThumbUpIcon color='success' />
            </IconButton>
            <IconButton
              aria-label="no"
              onClick={() => setFeedbackType(FeedbackType.DISLIKE)}
            >
              <ThumbDownIcon color="error" />
            </IconButton>
          </div>
        </div>
      </div>
      <Modal
        open={!!feedbackType}
        onClose={() => !isSubmitting && setFeedbackType(null)}
        aria-labelledby="modal-title"
      >
        <ModalBox>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{
              color: '#333333',
              fontWeight: 700,
              marginBottom: '1em',
              textAlign: 'center',
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
            }}
          >
            {feedbackType === FeedbackType.LIKE ? 'What did you like?' : 'What went wrong?'}
          </Typography>
          <FormControl component="fieldset" variant="standard" sx={{ width: '100%' }}>
            <FormGroup>
              {Object.entries(options).map(([value, label]) => (
                <FormControlLabel
                  key={value}
                  control={
                    <Checkbox
                      checked={feedbackOptions.includes(value)}
                      onChange={(e) => handleFeedbackChange(value, e.target.checked)}
                      theme={theme}
                      color="primary"
                      disabled={isSubmitting}
                    />
                  }
                  label={
                    <Typography sx={{
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: '#333333',
                      lineHeight: 1.4,
                    }}>
                      {label}
                    </Typography>
                  }
                  sx={{
                    marginBottom: '0.5rem',
                    alignItems: 'center', // Changed from flex-start to center
                    '.MuiFormControlLabel-label': {
                      marginTop: '2px' // Fine-tune text alignment
                    }
                  }}
                />
              ))}
              {feedbackOptions.find(o => o.endsWith('ANOTHER_REASON')) && (
                <TextField
                  fullWidth
                  id="standard-multiline-static"
                  size="small"
                  multiline
                  rows={isSmallScreen ? 3 : 5}
                  variant="filled"
                  value={textData}
                  onChange={(e) => setTextData(e.target.value)}
                  placeholder="Please provide details"
                  disabled={isSubmitting}
                  sx={{
                    marginTop: '1em',
                    fontSize: { xs: '0.875rem', sm: '1rem' },
                  }}
                />
              )}
            </FormGroup>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2em',
              gap: '1rem',
            }}>
              <Button
                theme={theme}
                color="primary"
                size={isSmallScreen ? 'large' : 'medium'}
                variant="contained"
                onClick={submitModal}
                disabled={isSubmitting}
                sx={{
                  borderRadius: '12px',
                  minWidth: isSmallScreen ? '120px' : '100px',
                  height: isSmallScreen ? '48px' : '36px',
                  lineHeight: 1,
                  padding: '0 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>                            
            </Box>
          </FormControl>
        </ModalBox>
      </Modal>
      <ThankYouModal open={thankYouModalOpen} onClose={() => setThankYouModalOpen(false)} />
      <OopsModal open={oopsModalOpen} onClose={() => setOopsModalOpen(false)} />
    </div>
  );
};

export default Feedback;
