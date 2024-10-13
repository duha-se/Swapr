import React from "react";
import { Box } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./Footer.css";

function Footer() {
  return (
    <>
      <Box className="footer" sx={{ position: "fixed" , overflowY:'hidden', overflowX:'hidden' }}>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 ,overflowY:'hidden'}}>
          <LinkedInIcon />
          <InstagramIcon />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 ,overflowY:'hidden'}}>
          <CopyrightIcon />
          2024 swaprTeam@gmail.com All rights reserved.
        </Box>
      </Box>
    </>
  );
}

export default Footer;
