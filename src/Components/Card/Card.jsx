// import React from 'react'
// import { Card, CardContent, CardMedia, Grid2, Typography, IconButton, TextField, Button, Box } from '@mui/material';
// import { LocationOn, Palette, Comment, Send } from '@mui/icons-material';
// import thinkingFace from "../../assets/ThinkingFace.svg";
// import './Card.css';
// function CardComponents ({ username, userImage, timePublished, postDetails, profilePic }) {

//     return (
//       <>
//     <Grid2 item >
//       <Card sx={{ maxWidth: '50rem',height: '45rem', backgroundColor: '#255b4e', color: '#ffffff', borderRadius: 2 }}>
//         {/* Post Header */}
//         <CardContent
//         className='username-time-div'
//         >
//           <img
//             src={userImage}

//             alt="User"
//             style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '12px', border: '2px solid #ffffff' }}
//           />
//           <Box>
//             <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
//               {username}
//             </Typography>
//             <Typography variant="body2" sx={{ color: '#c3e2cc' }}>
//               {timePublished}
//             </Typography>
//           </Box>
//         </CardContent>

//         <Grid2 container>

//           <Grid2 item xs={12} sm={6}>
//             <CardMedia
//               component="img"
//               image={postDetails.postImage}
//               alt="Product"
//               sx={{ borderRadius: '8px', marginBottom: 2  ,  width: '50%' , borderRight: '1px solid #ccc'}}
//             />
//           </Grid2>

//           {/* Right Side: Details and Interact Bar */}
//           <Grid2 item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//             {/* Post Details */}
//             <Box sx={{ padding: 2 }} className="post-details">
//               <Typography variant="body2" sx={{ color: '#c3e2cc', marginBottom: 1 }}>
//                 <LocationOn sx={{ color: '#ffffff', fontSize: '20px', verticalAlign: 'middle' }} /> {postDetails.address}
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#c3e2cc', marginBottom: 1 }}>
//                 <Palette sx={{ color: '#ffffff', fontSize: '20px', verticalAlign: 'middle' }} /> Color: {postDetails.color}
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#c3e2cc', marginBottom: 1 }}>
//                 Size: {postDetails.size}
//               </Typography>
//               <Typography variant="body2" sx={{ color: '#c3e2cc', marginBottom: 2 }}>
//                 {postDetails.description}
//               </Typography>
//               <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
//                 Price: {postDetails.price} {postDetails.currency}
//               </Typography>
//             </Box>

//             {/* Interaction Bar */}
//             <Box  className="interact-bar" sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', paddingBottom: 2 }}>
//               <IconButton className='interact-bar-button'>
//                 <i className="fa-solid fa-magnet fa-xl" style={{ color: "#000000" }}></i>
//               </IconButton>
//               <IconButton className='interact-bar-button'>
//                 <img src={thinkingFace} alt="Thinking Face" style={{ width: '30px' }} />
//               </IconButton>
//               <IconButton className='interact-bar-button'>
//                 <Comment sx={{ fontSize: 30, color: '#ffffff' }} />
//               </IconButton>
//             </Box>
//           </Grid2>
//         </Grid2>

//         {/* Comments Section */}
//         <CardContent sx={{  padding: 2,position:'relative' ,bottom: '25rem ',overflowY:'scroll'}} >
//           <Typography variant="h6" sx={{ color: '#d0efce', }}>
//             Comments
//           </Typography>
//           {postDetails.comments.map((comment, index) => (
//             <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
//               <img
//                 src={profilePic}
//                 alt="User"
//                 style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '10px' }}
//               />
//               <Typography variant="body2" sx={{ color: '#d0efce' }}>
//                 <strong>{comment.username}:</strong> {comment.comment}
//               </Typography>
//             </Box>
//           ))}

//           {/* Comment Input Section */}
//           <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2,}}>
//             <img
//               src={profilePic}
//               alt="User"
//               style={{ borderRadius: '50%', width: '40px', height: '40px', marginRight: '10px' }}
//             />
//             <TextField
//               placeholder={`Add a comment for ${username}`}
//               variant="outlined"
//               size="small"
//               sx={{ backgroundColor: '#e2f2e2', borderRadius: 1, flexGrow: 1 }}
//             />
//             <Button variant="contained" sx={{ backgroundColor: '#255b4e', marginLeft: 1 }}>
//               <Send sx={{ color: '#d0efce' }} />
//             </Button>
//           </Box>
//         </CardContent>
//       </Card>
//     </Grid2>

//       </>
//     )

// }

// export default CardComponents

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { LocationOn, Palette, Comment, Send } from "@mui/icons-material";
import thinkingFace from "../../assets/ThinkingFace.svg";
import "./Card.css";

function CardComponents({
  username,
  userImage,
  timePublished,
  postDetails,
  profilePic,
}) {
  return (
    <>
      <Grid2 item>
        <Card
          sx={{
            maxWidth: "50rem",
            maxHeight: "45rem",
            backgroundColor: "#255b4e",
            color: "#ffffff",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Post Header */}
          <CardContent className="username-time-div">
            <img
              src={userImage}
              alt="User"
              style={{
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                marginRight: "12px",
                border: "2px solid #ffffff",
              }}
            />
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#ffffff", fontWeight: "bold" }}
              >
                {username}
              </Typography>
              <Typography variant="body2" sx={{ color: "#c3e2cc" }}>
                {timePublished}
              </Typography>
            </Box>
          </CardContent>

          <Grid2 container>
            {/* Post Image */}
            {postDetails.postImage && (
              <Grid2 item xs={12} sm={6}>
                <CardMedia
                  component="img"
                  image={postDetails.postImage}
                  alt="Product"
                  sx={{
                    borderRadius: "8px",
                    marginBottom: 2,
                    width: "50%",
                    borderRight: "1px solid #ccc",
                  }}
                />
              </Grid2>
            )}

            {/* Right Side: Details and Interact Bar */}
            <Grid2
              item
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Post Details (Scrollable if large) */}
              <Box sx={{ padding: 2 }} className="post-details">
                <Typography
                  variant="body2"
                  sx={{ color: "#c3e2cc", marginBottom: 1 }}
                >
                  <LocationOn
                    sx={{
                      color: "#ffffff",
                      fontSize: "20px",
                      verticalAlign: "middle",
                    }}
                  />{" "}
                  {postDetails.address}
                </Typography>
                {postDetails.color && (
                  <Typography
                    variant="body2"
                    sx={{ color: "#c3e2cc", marginBottom: 1 }}
                  >
                    <Palette
                      sx={{
                        color: "#ffffff",
                        fontSize: "20px",
                        verticalAlign: "middle",
                      }}
                    />{" "}
                    Color: {postDetails.color}
                  </Typography>
                )}
                {postDetails.size && (
                  <Typography
                    variant="body2"
                    sx={{ color: "#c3e2cc", marginBottom: 1 }}
                  >
                    Size: {postDetails.size}
                  </Typography>
                )}
                <Typography
                  variant="body2"
                  sx={{ color: "#c3e2cc", marginBottom: 2 }}
                >
                  {postDetails.description}
                </Typography>
                {postDetails.price && (
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", color: "#ffffff" }}
                  >
                    Price: {postDetails.price} {postDetails.currency}
                  </Typography>
                )}
              </Box>
              {/* </Grid2>
              <Grid2 item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}> */}
              {/* Interaction Bar */}
              <Box
                className="interact-bar"
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  paddingBottom: 2,
                }}
              >
                <IconButton className="interact-bar-button">
                  <i
                    className="fa-solid fa-magnet fa-xl"
                    style={{ color: "#000000" }}
                  ></i>
                </IconButton>
                <IconButton className="interact-bar-button">
                  <img
                    src={thinkingFace}
                    alt="Thinking Face"
                    style={{ width: "30px" }}
                  />
                </IconButton>
                <IconButton className="interact-bar-button">
                  <Comment sx={{ fontSize: 30, color: "#ffffff" }} />
                </IconButton>
              </Box>
            </Grid2>
          </Grid2>

          {/* Comments Section */}
          {/*<CardContent sx={{ padding: 2, height: '10rem', overflowY: 'scroll' }}> */}
          {/* <CardContent sx={{  padding: 2,position:'relative' ,bottom: '25rem '}} className='comment-section' >

            <Typography variant="h6" sx={{ color: '#d0efce' }}>
              Comments
            </Typography>
            {postDetails.comments.map((comment, index) => (
              <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}  >
                <img
                  src={profilePic}
                  alt="User"
                  style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '10px' }}
                />
                <Typography variant="body2" sx={{ color: '#d0efce' }}>
                  <strong>{comment.username}:</strong> {comment.comment}
                </Typography>
              </Box>
            ))}
          </CardContent> */}
          <CardContent
            sx={{
              // padding: 0,
              marginTop: "1rem",
              height: "15rem",
              // overflow: "hidden",
              overflowY: "scroll", // Enable vertical scrolling

              position: "relative",
              bottom: "25rem ",
              border: "solid 0.2rem #d0efce",
            }}
          >
            {/* Fixed Comments Header */}
            <Box
              sx={{
                padding: "16px",
                backgroundColor: "#2a4d3e",
                position: "sticky",
                top: 0,
                zIndex: 1,
              }}
            >
              <Typography variant="h6" sx={{ color: "#d0efce" }}>
                Comments
              </Typography>
            </Box>

            {/* Scrollable Comments */}
            <Box
              className="comment-section"
              sx={{
                // maxHeight: "10rem", // Set a fixed height for the comments section
                overflowY: "scroll", // Enable vertical scrolling
                // padding: "8px", // Add some padding for space inside the scrollable area
                maxHeight: "calc(100% - 60px)", // Adjust height to fit below the sticky header
                // Enable vertical scrolling
                padding: "8px",
              }}
            >
              {postDetails.comments.map((comment, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <img
                    src={profilePic}
                    alt="User"
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <Typography variant="body2" sx={{ color: "#d0efce" }}>
                    <strong>{comment.username}:</strong> {comment.comment}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>

          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "#2a4d3e",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              borderTop: "1px solid #3d6b5a",
            }}
          >
            <img
              src={profilePic}
              alt="User"
              style={{
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                marginRight: "10px",
              }}
            />
            <TextField
              placeholder={`Add a comment for ${username}`}
              variant="outlined"
              size="small"
              sx={{ backgroundColor: "#e2f2e2", borderRadius: 1, flexGrow: 1 }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#255b4e", marginLeft: 1 }}
            >
              <Send sx={{ color: "#d0efce" }} />
            </Button>
          </Box>
        </Card>
      </Grid2>
    </>
  );
}

export default CardComponents;

{
  /* Comments Section */
}
{
  /* <Box
  sx={{
    padding: 0,
    marginTop: "1rem",
    height: "15rem",
    overflow: "hidden",
    position: "relative",
  }}
>
  {/* Fixed Comments Header */
}
// <Box
//   sx={{
//     padding: "16px",
//     backgroundColor: "#2a4d3e",
//     position: "sticky",
//     top: 0,
//     zIndex: 1,
//   }}
// >
//   <Typography variant="h6" sx={{ color: "#d0efce" }}>
//     Comments
//   </Typography>
// </Box>

{
  /* Scrollable Comments */
}
// <Box
//   sx={{
//     maxHeight: "calc(100% - 60px)", // Adjust height to fit below the sticky header
//     overflowY: "auto", // Enable vertical scrolling
//     padding: "8px", // Add some padding for space inside the scrollable area
//   }}
// >
{
  /* {postDetails.comments.map((comment, index) => (
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
      >
        <img
          src={profilePic}
          alt="User"
          style={{
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            marginRight: "10px",
          }}
        />
        <Typography variant="body2" sx={{ color: "#d0efce" }}>
          <strong>{comment.username}:</strong> {comment.comment}
        </Typography>
      </Box>
    ))}
  </Box>
</Box>; */
}
