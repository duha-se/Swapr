import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  InputBase,
  Grid2,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  IconButton,
  Link,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VerticalTabs from "../../Components/VerticalTabs/VerticalTabs";
import AppBarComponent from "../../Components/AppBar/AppBar";
import { getFriends, addFriend } from "../../service/FriendList.service";
import { getAllUsers } from "../../service/AllUsers.service";
import Footer from "../Footer/Footer";

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const navigate = useNavigate();

  const friends = getFriends();
  const allUsers = getAllUsers();

  const styledList = {
    backgroundColor: "#d0efce",
    right: "15rem",
    position: "relative",
  };

  useEffect(() => {
    setUsers(allUsers);
  }, []);

  const UnFriendUsers = allUsers.filter(
    (user) => !friends.some((friend) => friend.id === user.id)
  );

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const searchedUser = UnFriendUsers.filter((user) =>
      user.username.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(searchedUser);
  };
  const handleProfileClick = (id) => {
    navigate(`/profile/${id}`);
  };
  
  const handleAddFriend = (newFriend) => {
    const updatedFriends = addFriend(newFriend);
    setUsers(updatedFriends); 
  };

  return (
    <>
      <AppBarComponent />
      <VerticalTabs />
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "auto 1fr",
          alignItems: "center",
          justifyItems: "center",
          padding: "2rem",
          gap: "0.5rem",
          marginBottom: "6vh",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            borderRadius: "2rem",
            padding: "1rem 2rem",
            marginTop: "5vh",
            width: "30vw",
            bgcolor: "#255b4e",
            gap: "1rem",
          }}
        >
          <Search
            sx={{
              color: "#d0efce",
            }}
          />
          <InputBase
            placeholder="Search New Friend"
            value={searchTerm}
            onChange={handleSearch}
            sx={{
              color: "#d0efce",
            }}
          />
        </Box>
        <Grid2 container spacing={3} justifyContent="center">
          <List sx={styledList}>
            {filteredUsers.map((user, id) => (
              <ListItem
                key={id}
                disableGutters
                secondaryAction={
                  <IconButton
                    aria-label="add"
                    onClick={() => handleAddFriend(user)}
                  >
                    <PersonAddIcon />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar
                    alt={user.username}
                    src={user.profilePic}
                    onClick={() => handleProfileClick(user.id)}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Link
                      component="button"
                      variant="body2"
                      onClick={() => handleProfileClick(user.id)}
                      sx={{
                        cursor: "pointer",
                        textDecoration: "none",
                        color: "inherit",
                      }}
                    >
                      {user.username}
                    </Link>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid2>
      </Box>
      <Footer />
    </>
  );
};
export default SearchPage;
