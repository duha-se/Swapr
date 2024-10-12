import React from 'react';
import { IconButton } from '@mui/material';
import './IconBar.css'; // Import the updated CSS file

const IconBar = ({ emojiIcon }) => {
  return (
    <div className="icon-bar">
      <IconButton className="icon-item">
        <i className="fa-solid fa-magnet" style={{ color: "inherit" }}></i>
      </IconButton>
      <IconButton className="icon-item">
        <img src={emojiIcon} alt="Emoji" className="icon-image" />
      </IconButton>
      <IconButton className="icon-item">
        <i className="fa-solid fa-comment" style={{ color: "inherit" }}></i>
      </IconButton>
    </div>
  );
};

export default IconBar;
