import React from 'react';
import { IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import './CommentButton.css'; // Ensure the CSS file exists for styling

const CommentButton = () => {
  return (
    
    <IconButton className="comment-btn">
      <Send />
    </IconButton>
  );
};

export default CommentButton;
