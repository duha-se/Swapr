import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../Button/ButtonComponent";
import { getFriends, deleteFriend } from "../../../service/FriendList.service"; 

const FriendsList = ({ open, handleClose }) => {
  const [friends, setFriends] = useState([]);
  const navigate = useNavigate();

  const unFriendButtonStyle = {
    color: "#d0efce",
    border: "1rem solid #255b4e",
    backgroundColor: "#255b4e",
  };

  const StyledTabs = styled(DialogContent)({
    backgroundColor: "#255b4e",
  });

  useEffect(() => {
    setFriends(getFriends());
  }, []);

  const handleUnFriend = (id) => {
    deleteFriend(id);
    setFriends(getFriends());
  };

  const handleCloseAndNavigate = () => {
    handleClose();
    navigate("/home");
  };

  return (
    <>
      <StyledTabs>
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle sx={{ background: "#255b4e", color: "#d0efce" }}>
            Friends List
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseAndNavigate}
              aria-label="close"
              sx={{ color: "#d0efce", left: "27rem" }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent
            dividers
            sx={{ maxHeight: "400px", background: "#d0efce" }}
          >
            {friends.map((friend, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 2,
                  borderBottom:
                    index !== friends.length - 1
                      ? "0.2rem solid #255b4e"
                      : "none",
                  paddingBottom: "1rem",
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: "#255b4e",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1rem",
                  }}
                >
                  <img
                    src={friend.profilePic}
                    alt="User"
                    style={{
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      marginRight: "10px",
                    }}
                  />
                  <strong>{friend.username}</strong>
                </Typography>
                <ButtonComponent
                  sx={unFriendButtonStyle}
                  text="UnFriend"
                  onClick={() => handleUnFriend(friend.id)}
                />
              </Box>
            ))}
          </DialogContent>
        </Dialog>
      </StyledTabs>
    </>
  );
};

export default FriendsList;
