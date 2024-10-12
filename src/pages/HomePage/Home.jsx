import React from "react";
import {

  Grid2,
  
  Box,
} from "@mui/material";

import profilePic from "../../assets/girlprof.png";

import AddPostButton from "../../Components/button/AddPostButton";

import CardComponents from "../../Components/Card/Card";

import posts from "./Posts";
import VerticalTabs from "../../Components/VerticalTabs/VerticalTabs";
import Appbar from "../../Components/AppBar/AppBar";

import "./Home.css";

const HomePage = () => {
  return (
    <>
      {/* Horizontal Tabs at the top */}
      <Appbar />
      {/* Vertical Tabs on the left */}
      <VerticalTabs />
      <AddPostButton />
      <Box className="user-contain">
       
        <Grid2 container direction="column" alignItems="center" spacing={2}>
          {posts.map((post, id) => (
            <Grid2 item key={id} xs={6}>
              <CardComponents
                username={post.username}
                userImage={post.userImage}
                timePublished={post.timePublished}
                postDetails={post.postDetails}
                profilePic={profilePic}
              />
            </Grid2>
           
          ))}
        </Grid2>
        
      </Box>
    </>
  );
};

export default HomePage;
