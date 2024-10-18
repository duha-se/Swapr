import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Container,
  Avatar,
} from "@mui/material";
import profilePic from "../../assets/girlprof.png";
import logo from "../../assets/lo.png";

const AppBarComponent = () => {
  return (
    <AppBar sx={{ backgroundColor: "#255b4e", position: "fixed" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "100px", height: "auto" }}
              />
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {location.pathname !== "../../pages/ProfilePage/Profile.jsx" && (
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt="Profile" src={profilePic} />
                </IconButton>
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppBarComponent;
