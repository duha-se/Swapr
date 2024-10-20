import React from "react";
import { Grid2, Box } from "@mui/material";

import profilePic from "../../assets/girlprof.png";

import CardComponents from "../../Components/Card/Card";
import VerticalTabs from "../../Components/VerticalTabs/VerticalTabs";
import ButtonComponent from "../../Components/Button/ButtonComponent";
import AppBarComponent from "../../Components/AppBar/AppBar";
import posts from "../../Json/Posts";
import Footer from "../Footer/Footer";

const HomePage = () => {

  const styledContain = {
    position: 'relative',
    left: '30%',
    top: '6rem',
    color:' #d0efce',
    backgroundColor:' #255b4e',
    boxShadow:' 0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius:' 5px',
    width: '600px',
    height: '30rem'
  }
  const addPostbuttonStyles = {
    position: "fixed",
    left: "10rem",
    top: "7rem",
    width: "6rem",
    height: "6rem",
    padding: "3rem 4rem",
    backgroundColor: "#255b4e",
    color: "#d0efce",
    border: "none",
    borderRadius: "0 0 100px 0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
    fontSize: "0.9rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    lineHeight: "1.4",
    transform: "translateY(-50px)",
    "&:hover": {
      backgroundColor: "#d0efce",
      color: "#255b4e",
    },
  };

  return (
    <>
      {/* Horizontal Tabs at the top */}
      <AppBarComponent />
      {/* Vertical Tabs on the left */}
      <VerticalTabs />
      <ButtonComponent sx={addPostbuttonStyles} text="Add New Post" />

      <Box sx={styledContain}>
        <Grid2
          xs={8}
          sm={6}
          container
          direction="column"
          alignItems="center"
          spacing={2}
          paddingBottom="5.5rem"
        >
          {posts.map((post, id) => (
            <Grid2 xs={8} sm={6} item="true" key={id}>
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
      <Footer/>
    </>
  );
};

export default HomePage;
