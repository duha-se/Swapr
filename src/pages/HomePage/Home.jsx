import React from 'react';
import { Card, CardContent, CardMedia, Grid2, Typography, IconButton, TextField, Box } from '@mui/material';
import { LocationOn, Palette, Comment } from '@mui/icons-material';
import thinkingFace from "../../assets/ThinkingFace.svg";
import profilePic from "../../assets/girlprof.png";
import logo from "../../assets/lo.png";
import posts from "./Posts";
import CommentButton from '../../Components/button/CommentButton';
import IconBar from '../../Components/button/IconBar';
import AddPostButton from "../../Components/button/AddPostButton";
import "./Home.css";



const HomePage = () => {
  return (
    <div>

      {/* Horizontal Tabs at the top */}
      <div className="hor-tabs">
        <div className="home-tab">
          <img className="home-img" src={logo} alt="Logo" />
        </div>
        <div className="right-side-tab">
          <img className="img-profile" src={profilePic} alt="Profile" />
          <p>Duha Ki</p>
        </div>
      </div>

      {/* Vertical Tabs on the left */}
      <div className="main-content">
        <div className="vertical-tabs">
          <div className="tab-item">
            <i className="fa-solid fa-house" style={{ color: "#d0efce" }}></i>
            Home
          </div>
          <div className="tab-item">
            <i className="fa-regular fa-id-badge" style={{ color: "#d0efce" }}></i>
            Profile
          </div>
          <div className="tab-item">
            <i className="fa-brands fa-wpexplorer" style={{ color: "#d0efce" }}></i>
            Discover
          </div>
          <div className="tab-item">
            <i className="fa-solid fa-message" style={{ color: "#d0efce" }}></i>
            Messages
          </div>
          <div className="tab-item">
            <i className="fa-solid fa-rectangle-list" style={{ color: "#d0efce" }}></i>
            Friends List
          </div>
          <div className="tab-item">
            <i className="fa-solid fa-magnifying-glass" style={{ color: "#d0efce" }}></i>
            Search
          </div>
          <div className="tab-item">
            <i className="fa-solid fa-right-from-bracket" style={{ color: "#d0efce" }}></i>
            Log out
          </div>
        </div>

        <AddPostButton />
      </div>
      <Box sx={{ backgroundColor: '#d0efce', padding: 4 }}>
        <Grid2 container direction="column" alignItems="center" spacing={4}>
          {posts.map((post, id) => (
            <Grid2 item key={id} xs={12} md={8}>
              <Card sx={{ maxWidth: 500, backgroundColor: '#255b4e', color: '#d0efce' }}>
                <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '50px', minHeight: '50px' }}>
                    <img src={post.userImage} alt="User" style={{ borderRadius: '50%', width: '40px', height: '30px', objectFit: 'cover' }} />
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h6" sx={{ lineHeight: 1 }}>{post.username}</Typography>
                    <Typography variant="body2" sx={{ color: '#d0efce', display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ marginLeft: '4px' }} /> {post.postDetails.address}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ marginLeft: 'auto', color: '#d0efce', whiteSpace: 'nowrap' }}>
                    {post.timePublished}
                  </Typography>
                </CardContent>



                <CardMedia component="img" height="300" image={post.postDetails.postImage} alt="Product" />
                <CardContent sx={{ display: 'flex', justifyContent: 'left' }} >

                  <IconBar emojiIcon={thinkingFace} />

                </CardContent>

                <CardContent>
                  <Typography variant="body2">
                  </Typography>
                  {post.size && (
                    <Typography variant="body2">
                      <Palette sx={{ color: '#d0efce' }} /> Color: {post.postDetails.color} | Size: {post.size}
                    </Typography>
                  )}
                  <Typography variant="body2" sx={{ color: '#000', fontSize: '0.95rem', whiteSpace: 'pre-line', wordBreak: 'break-word' }}>{post.postDetails.description}</Typography>
                  {post.price && (
                    <Typography variant="h6" sx={{ color: '#d0efce' }}>
                      Price: {post.postDetails.price}
                    </Typography>
                  )}
                </CardContent>

                <CardContent>
                  <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Comments
                  </Typography>
                  {post.postDetails.comments.map((comment, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                      <img src="../images/profilepic.png" alt="User" style={{ borderRadius: '50%', width: '40px', marginRight: '10px' }} />
                      <Typography variant="body2">
                        <strong>{comment.username}:</strong> {comment.comment}
                      </Typography>
                    </Box>
                  ))}

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src="../images/girlprof.png" alt="User" style={{ borderRadius: '50%', width: '40px', marginRight: '10px' }} />
                    <TextField
                      placeholder={`Add a comment for ${post.username}`}
                      variant="outlined"
                      size="small"
                      sx={{ flexGrow: 1, backgroundColor: '#d0efce', borderRadius: 1 }}
                    />
                    <CommentButton />
                  
                
                  </Box>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </div>
  );
};

export default HomePage;

