import React, { useEffect, useState } from 'react';
import { Box, InputBase, Grid2 } from '@mui/material';
import { Search } from '@mui/icons-material';
import VerticalTabs from '../../Components/VerticalTabs/VerticalTabs';
import Appbar from '../../Components/AppBar/AppBar';
import CardComponents from '../../Components/Card/Card';
import post from '../HomePage/Posts';


const  Discover=()=> {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userLocation, setUserLocation] = useState('');

 
  useEffect(() => {
    const location = localStorage.getItem('userLocation') || 'Jerusalem';
    setUserLocation(location);

  const defaultPosts = post.filter(
    (post) => post.postDetails.address.toLowerCase() === location.toLowerCase()
  );
  setFilteredPosts(defaultPosts);
}, []);


  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const searchedPosts = post.filter((post) =>
      post.postDetails.address.toLowerCase().includes(term.toLowerCase())
    );;
    setFilteredPosts(searchedPosts);
  };

  return (
    <>
      <Appbar />
      <VerticalTabs />

      <Box
        sx={{
          display: 'grid',
          gridTemplateRows: 'auto 1fr',
          alignItems: 'center',
          justifyItems: 'center',
          padding: '2rem',
          gap: '0.5rem',
          marginBottom: '6vh'
        }}
      >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'center',
            borderRadius: '2rem',
            padding: '1rem 2rem',
            marginTop: '5vh',
            width: '30vw',
            bgcolor: '#255b4e',
            color:'#d0efce',
            gap: '1rem',
            
          }}
        >
          <Search />
          <InputBase
            placeholder="Search by location..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{
              color:'#d0efce'
            }}
          />
        </Box>
        <Grid2  container
                justifyContent="center" 
                sx={{
                 marginBottom: '10vh',
                  marginTop: '5vh', 
                }}
               >
            {filteredPosts.slice(0, 1).map((post, id) => (
               <Grid2 item 
               xs={12} 
               sm={8} 
               md={6} 
               key={id} 
               sx={{ display: 'flex', justifyContent: 'center' }}
               >
               <CardComponents {...post} />
             </Grid2>
          ))}
        </Grid2>
      </Box>
    </>
  );
}

export default Discover;
