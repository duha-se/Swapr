import React from "react";
import { Box, styled } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  const StyledFooter = {
    position: "fixed",
    overflowY: "hidden",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#255b4e",
    bottom: " 0",
    height: "80px",
    zIndex: "1000",
    color: "#d0efce",
  };
  return (
    <>
      <Box sx={StyledFooter}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflowX: "hidden",
          }}
        >
          <LinkedInIcon />
          <InstagramIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            overflowX: "hidden",
          }}
        >
          <CopyrightIcon />
          2024 swaprTeam@gmail.com All rights reserved.
        </Box>
      </Box>
    </>
  );
}

export default Footer;
