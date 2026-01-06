// VideoGallery.js

import React, { useState, useEffect } from 'react';
import { Typography, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import videoData from '../../data/videoData.json';
import './VideoGallery.css';
import CustomVideoCard from './CustomVideoCard'; // Import the custom component

const VideoGallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [setMaxHeights] = useState({});

  useEffect(() => {
    const heights = {};
    Object.keys(categorizedData).forEach(category => {
      heights[category] = Math.max(...Array.from(document.querySelectorAll(`.${category}-content`)).map(el => el.clientHeight));
    });
    setMaxHeights(heights);
  }, []);

  const handleClickOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };

  const categorizedData = videoData.reduce((acc, video) => {
    if (!acc[video.category]) {
      acc[video.category] = [];
    }
    acc[video.category].push(video);
    return acc;
  }, {});

  Object.keys(categorizedData).forEach(category => {
    categorizedData[category].sort((a, b) => a.sortOrder - b.sortOrder);
  });

  return (
    <div>
      {Object.keys(categorizedData).map((category, index) => (
        <div key={index}>
          <Typography sx={{ fontWeight: '500' }} variant="h5" component="h2" gutterBottom mt={4}>
            {category}
          </Typography>
          <Grid container spacing={4}>
            {categorizedData[category].map((video, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <CustomVideoCard
                  video={video}
                  category={category}
                  onClick={handleClickOpen}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      ))}
      {selectedVideo && (
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          scroll="body"
        >
          <DialogContent>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
              className="close-button"
            >
              <CloseIcon />
            </IconButton>
            <iframe
              width="100%"
              height="470"
              src={selectedVideo.src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="video-modal-content">            
              <Typography mt={1} display="block" variant="caption" color="text.secondary" gutterBottom align='left'> 
                <b>Duration:</b> {selectedVideo.duration}
              </Typography>
              <Typography mt={1} variant="body1" color="text.secondary">
                {selectedVideo.description}
              </Typography>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default VideoGallery;