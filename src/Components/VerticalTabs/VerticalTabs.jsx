import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tab, Tabs, Box, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import FriendsList from "../Pop-up/FriendsList/FriendsList";

const VerticalTabs = () => {
  const [value, setValue] = useState("Home");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const handleClose = () => {
    setOpen(false);
  };
  const StyledTabs = styled(Tabs)({
    backgroundColor: "#255b4e",
    borderRight: 1,
    height: "100vh",
    "& .MuiTab-root": {
      color: "#d0efce",
    },
    "& .Mui-selected": {
      color: " #000 !important ",
    },

    "& .MuiTabs-scroller": {
      top: "4rem",
    },
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case "Home":
        navigate("/home");
        break;
      case "Profile":
        navigate("/profile");
        break;
      case "Discover":
        navigate("/discover");
        break;
      case "Messages":
        navigate("/messages");
        break;
      case "search":
        navigate("/search");
        break;
      case "FriendsList":
        setOpen(true);
        break;
      case "logout":
        navigate("/login");
        break;

      default:
        break;
    }
  };

  const getValueFromLocation = (path) => {
    switch (path) {
      case "/home":
        return "Home";
      case "/profile":
        return "Profile";
      case "/discover":
        return "Discover";
      case "/messages":
        return "Messages";
      case "/search":
        return "search";
      case "/login":
        return "logout";
      default:
        return "Home";
    }
  };

  const currentValue = getValueFromLocation(location.pathname);
  return (
    <Box sx={{ position: "fixed", left: 0 }}>
      <StyledTabs
        orientation="vertical"
        variant="scrollable"
        value={currentValue}
        onChange={handleChange}
        TabIndicatorProps={{ style: { backgroundColor: "#E6F7EC" } }}
      >
        <Tab
          icon={<HomeIcon />}
          iconPosition="start"
          label="Home"
          value="Home"
        />
        <Tab
          icon={<AccountCircleIcon />}
          iconPosition="start"
          label="Profile"
          value="Profile"
        />
        <Tab
          icon={<ExploreIcon />}
          iconPosition="start"
          label="Discover"
          value="Discover"
        />
        <Tab
          icon={<ChatIcon />}
          iconPosition="start"
          label="Messages"
          value="Messages"
        />
        <Tab
          icon={<PersonSearchIcon />}
          iconPosition="start"
          label="FRIENDS LIST"
          value="FriendsList"
        />
        <Tab
          icon={<SearchIcon />}
          iconPosition="start"
          label="Search"
          value="search"
        />
        <Tab
          icon={<LoginIcon />}
          iconPosition="start"
          label="LOG OUT"
          value="logout"
        />
      </StyledTabs>
      <FriendsList open={open} handleClose={handleClose} />
    </Box>
  );
};
export default VerticalTabs;
