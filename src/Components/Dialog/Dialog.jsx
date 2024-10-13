import React from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

function DialogComponent({ open, onClose, postDetails, profilePic }) {
  return (
    <>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle sx={{ background: "#255b4e" }}>Comments</DialogTitle>
        <DialogContent
          dividers
          sx={{ maxHeight: "400px", background: "#d0efce" }}
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
              <Typography variant="body2" sx={{ color: "#000000" }}>
                <strong>{comment.username}:</strong> {comment.comment}
              </Typography>
            </Box>
          ))}
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DialogComponent;
