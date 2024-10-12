import React from 'react';
import { Card, CardContent, CardMedia, Grid2, Typography, IconButton, TextField, Button, Box } from '@mui/material';
import { LocationOn, Palette, Comment, Send } from '@mui/icons-material';
import thinkingFace from "../../assets/ThinkingFace.svg";

import posts from "./Posts";
import VerticalTabs from '../../Components/VerticalTabs/VerticalTabs';
import Appbar from '../../Components/AppBar/AppBar';
import "./Home.css";


const HomePage = () => {
  return (
  <div>
          
            {/* Horizontal Tabs at the top */}
            <Appbar/>
            {/* Vertical Tabs on the left */}
            <VerticalTabs/>
            <div className="main-content">
           
              <button className="new-post-button">Add New Post</button>
            </div>
    <Box sx={{ backgroundColor: '#d0efce', padding: 4 }}>
      <Grid2 container direction="column" alignItems="center" spacing={4}>
        {posts.map((post, id) => (
          <Grid2 item key={id} xs={12} md={8}>
            <Card sx={{ maxWidth: 600, backgroundColor: '#255b4e', color: '#d0efce' }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <img src={post.userImage} alt="User" style={{ borderRadius: '50%', width: '40px', marginRight: '10px' }} />
                <Typography variant="h6">{post.username}</Typography>
                <Typography variant="body2" sx={{ marginLeft: 'auto', color: '#d0efce' }}>
                  {post.timePublished}
                </Typography>
              </CardContent>

              <CardMedia component="img" height="200" image={post.postDetails.postImage} alt="Product" />

              <CardContent>
                <Typography variant="body2">
                  <LocationOn sx={{ color: '#d0efce' }} /> {post.postDetails.address}
                </Typography>
                {post.size && (
                  <Typography variant="body2">
                    <Palette sx={{ color: '#d0efce' }} /> Color: {post.postDetails.color} | Size: {post.size}
                  </Typography>
                )}
                <Typography variant="body2">{post.postDetails.description}</Typography>
                {post.price && (
                  <Typography variant="h6" sx={{ color: '#d0efce' }}>
                    Price: {post.postDetails.price}
                  </Typography>
                )}
              </CardContent>

              <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
                <IconButton>
                <i className="fa-solid fa-magnet fa-xl" style={{color: "#000000"}}></i>
                </IconButton>
                <IconButton>
                  <img src={thinkingFace} alt="React" style={{ width: '30px' }} />
                </IconButton>
                <IconButton>
                  <Comment sx={{ fontSize: 30, color: '#000' }} />
                </IconButton>
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
                  <Button variant="contained" sx={{ backgroundColor: '#255b4e', marginLeft: 1 }}>
                    <Send sx={{ color: '#d0efce' }} />
                  </Button>
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


