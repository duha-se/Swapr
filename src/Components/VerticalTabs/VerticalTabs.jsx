import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import { Grid2 } from '@mui/material';


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
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ display: 'flex',
        height: '100vh',
        width:700 }}>
          
       <Grid2 container sx={{ flexGrow: 1 }}>
       <Grid2 item xs={3} sx={{ borderColor: 'divider' }}>
      
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        TabIndicatorProps={{ style: { backgroundColor: '#E6F7EC' } }}
            sx={{
              color: '#E6F7EC',
              bgcolor: '#255b4e',
              borderRight: 1,
              height:'100vh',
              
              '& .MuiTab-root': { color: '#E6F7EC'  },
              '& .Mui-selected': { color: '#E6F7EC' },
              
            }}
            
      >
        
        <Tab
              
              icon={<HomeIcon />}
              iconPosition="start"
              label="HOME"
              sx={{ color: '#E6F7EC' ,justifyContent: 'center' }}
              {...a11yProps(0)}/
              >

        <Tab icon={<AccountCircleIcon />}
               iconPosition="start"
               label="PROFILE"
               sx={{ color: '#E6F7EC',justifyContent: 'center' }}
               {...a11yProps(1)}/>

        <Tab icon={<ExploreIcon />}
              iconPosition="start"
              label="DISCOVER"
              sx={{ color: '#E6F7EC' ,justifyContent: 'center' }}
              {...a11yProps(2)}/>

        <Tab icon={<ChatIcon />}
              iconPosition="start"
              label="MESSAGES"
              sx={{ color: '#E6F7EC',justifyContent: 'center' }}
              {...a11yProps(3)}/>

        <Tab icon={<PersonSearchIcon />}
              iconPosition="start"
              label="FRIENDS LIST"
              sx={{ color: '#E6F7EC',justifyContent: 'center' }}
              {...a11yProps(4)} />

        <Tab icon={<SearchIcon />}
              iconPosition="start"
              label="SEARCH"
              sx={{ color: '#E6F7EC' ,justifyContent: 'center'}}
              {...a11yProps(5)} />

        <Tab icon={<LoginIcon />}
              iconPosition="start"
              label="LOG OUT"
              sx={{ color: '#E6F7EC' ,justifyContent: 'center' }}
              {...a11yProps(6)} />
      </Tabs>
      </Grid2>
      <Grid2 item xs={5}  >
      <TabPanel value={value} index={0}>
    {/* <HomePage/> */}
        Home Page
      </TabPanel>
      <TabPanel value={value} index={1}>
        Profile Page
      </TabPanel>
      <TabPanel value={value} index={2}>
        Discover Page
      </TabPanel>
      <TabPanel value={value} index={3}>
        Messages Page
      </TabPanel>
      <TabPanel value={value} index={4}>
        Friends List Page
      </TabPanel>
      <TabPanel value={value} index={5}>
        Search Page
      </TabPanel>
      <TabPanel value={value} index={6}>
        Logout Page
      </TabPanel>
      
      </Grid2>
      </Grid2>
    </Box>
  );
}