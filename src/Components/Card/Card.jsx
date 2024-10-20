import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
  IconButton,
  TextField,
  Box,
  styled,
} from "@mui/material";

import { LocationOn, Palette, Comment, Send } from "@mui/icons-material";
import thinkingFace from "../../assets/ThinkingFace.svg";
import DialogComponent from "../Dialog/Dialog";
import ButtonComponent from "../Button/ButtonComponent";

function CardComponents({
  username,
  userImage,
  timePublished,
  postDetails,
  profilePic,
}) {
  const [open, setOpen] = useState(false);

  const handleShowMore = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid2 xs={8} sm={6} item="true">
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
          <CardContent sx={usernameTimeSection}>
            <img
              src={userImage}
              alt="User"
              style={{
                borderRadius: "50%",
                width: "3rem",
                height: "3rem",
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
            {postDetails.postImage && (
              <Grid2 item="true" xs={8} sm={6}>
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

            <Grid2
              item="true"
              xs={12}
              sm={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={
                  postDetails.postImage
                    ? postDetailsStyleWithImage
                    : postDetailsStyleWithoutImage
                }
              >
                <Typography variant="body2" sx={{ color: "#c3e2cc" }}>
                  <LocationOn
                    sx={{
                      color: "#ffffff",
                      fontSize: "20px",
                      verticalAlign: "middle",
                    }}
                  />
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
                    />
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
              <Box
                sx={
                  postDetails.postImage
                    ? interactBarStyledWithImage
                    : interactBarStyledWithoutImage
                }
              >
                <IconButtonStyled>
                  <i
                    className="fa-solid fa-magnet fa-xl"
                    style={{ color: "#000000" }}
                  ></i>
                </IconButtonStyled>
                <IconButtonStyled>
                  <img
                    src={thinkingFace}
                    alt="Thinking Face"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      cursor: "pointer",
                    }}
                  />
                  {postDetails.likes}
                </IconButtonStyled>
                <IconButtonStyled>
                  <Comment sx={{ fontSize: 30, color: "#ffffff" }} />
                </IconButtonStyled>
              </Box>
            </Grid2>
          </Grid2>

          {/* Comments Section */}
          <CardContent
            sx={
              postDetails.postImage
                ? commentSectionStyleWithImage
                : commentSectionStyleWithoutImage
            }
          >
            <Typography
              variant="h6"
              sx={{ color: "#d0efce", marginBottom: "10px" }}
            >
              Comments
            </Typography>

            <Box sx={{ paddingRight: "10px" }}>
              {/* Only show the first 1 or 2 comments */}
              {postDetails.comments.slice(0, 2).map((comment, index) => (
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

              {/* Show more button */}
              {postDetails.comments.length > 2 && (
                <ButtonComponent
                  onClick={handleShowMore}
                  sx={showMoreButtonStyle}
                  text=" Show more ..."
                />
              )}
            </Box>
          </CardContent>

          {/* Input section for adding comments */}
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
            <IconButton sx={{ backgroundColor: "#255b4e", marginLeft: 1 }}>
              <Send sx={{ color: "#d0efce" }} />
            </IconButton>
          </Box>
        </Card>
      </Grid2>

      {/* Show All Comments pop-up */}
      <DialogComponent
        open={open}
        onClose={handleClose}
        postDetails={postDetails}
        profilePic={profilePic}
      />
    </>
  );
}

export default CardComponents;

const usernameTimeSection = {
  display: "flex",
  alignItems: "center",
  width: "600px",
  padding: "2px",
  backgroundColor: "#255b4e",
  color: "#d0efce",
  borderBottom: "1px solid #d0efce",
};

const postDetailsStyleWithImage = {
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  backgroundColor: "transparent",
  bottom: "17rem",
  left: "20rem",
  position: "relative",
  height: "10rem",
  width: "10rem",
  border: "solid 0.2rem #d0efce",
  padding: 2,
};

const postDetailsStyleWithoutImage = {
  display: "flex",
  flexDirection: "column",
  overflowY: "scroll",
  backgroundColor: "transparent",
  top: "2rem",
  left: "1rem",
  position: "relative",
  height: "2rem",
  width: "29rem",
  border: "solid 0.2rem #d0efce",
  padding: 2,
};

const interactBarStyledWithImage = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "transparent",
  bottom: "31rem",
  left: "29rem",

  position: "relative",
  paddingBottom: 2,
};

const interactBarStyledWithoutImage = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  backgroundColor: "transparent",
  bottom: "4rem",
  left: "19rem",
  position: "relative",
  paddingBottom: 2,
};

const commentSectionStyleWithImage = {
  padding: 2,
  position: "relative",
  bottom: "27rem",
};

const commentSectionStyleWithoutImage = {
  padding: 2,
  position: "relative",
  bottom: "13rem",
};

const IconButtonStyled = styled(IconButton)({
  backgroundColor: "#255b4e",
  width: "4rem",
  height: "4rem",
  borderRadius: "10%",
  border: "#255b4e",
  margin: "0.5rem 0.5rem",
});

const showMoreButtonStyle = {
  color: "#d0efce",
  textTransform: "none",
  padding: 0,
  marginTop: 2,
  bottom: "2rem",
  left: "3rem",
  backgroundColor: "transparent",
  border: "none",
  boxShadow: "none",
};
