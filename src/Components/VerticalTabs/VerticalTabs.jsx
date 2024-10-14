import * as React from "react";
import PropTypes from "prop-types";
import { Tab, Tabs, Box, Grid2, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";

import "./VerticalTabs.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ position: "fixed", left: 0 }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "#E6F7EC" } }}
        sx={{
          color: "#E6F7EC",
          bgcolor: "#255b4e",
          borderRight: 1,
          height: "100vh",
          "& .MuiTab-root": { color: "#E6F7EC" },
        }}
      >
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          label="HOME"
          {...a11yProps(0)}
        />

        <Tab
          icon={<AccountCircleIcon />}
          iconPosition="start"
          label="PROFILE"
          {...a11yProps(1)}
        />

        <Tab
          icon={<ExploreIcon />}
          iconPosition="start"
          label="DISCOVER"
          {...a11yProps(2)}
        />

        <Tab
          icon={<ChatIcon />}
          iconPosition="start"
          label="MESSAGES"
          {...a11yProps(3)}
        />

        <Tab
          icon={<PersonSearchIcon />}
          iconPosition="start"
          label="FRIENDS LIST"
          {...a11yProps(4)}
        />

        <Tab
          icon={<SearchIcon />}
          iconPosition="start"
          label="SEARCH"
          {...a11yProps(5)}
        />

        <Tab
          icon={<LoginIcon />}
          iconPosition="start"
          label="LOG OUT"
          {...a11yProps(6)}
        />
      </Tabs>

      <Grid2 item="true" xs={5}>
        <TabPanel value={value} index={0}></TabPanel>
        <TabPanel value={value} index={1}></TabPanel>
        <TabPanel value={value} index={2}></TabPanel>
        <TabPanel value={value} index={3}></TabPanel>
        <TabPanel value={value} index={4}></TabPanel>
        <TabPanel value={value} index={5}></TabPanel>
        <TabPanel value={value} index={6}></TabPanel>
      </Grid2>
    </Box>
  );
}
