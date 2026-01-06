// VideoComponent.js
import React from 'react';
import { Typography, Box, useTheme, useMediaQuery } from '@mui/material';
import videoData from '../../data/videoData.json';
import './VideoComponent.css';

const VideoComponent = ({ videoId }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const video = videoData.find(v => v.id === videoId);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div className='container'>
      <Box
        sx={{
          maxWidth: 560,
          margin: 'auto',
          padding: 2,
          border: '1px solid #ddd',
          borderRadius: '10px',
          backgroundColor: theme.palette.mode === 'dark' ? 'white' : 'background.paper'
        }}
      >
        <iframe
          src={video.src}
          title={video.title}
          width="100%"
          height={isSmallScreen ? '200' : '315'}
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Box>
          <Typography
            sx={{ fontSize: '14px', color: 'text.secondary', textAlign: 'right' }}
            variant="body2"
          >
            <b>Duration:</b> {video.duration}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default VideoComponent;