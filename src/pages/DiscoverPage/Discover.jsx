import React, { useEffect, useState } from 'react';
import { Box, InputBase, Grid } from '@mui/material';
import VerticalTabs from '../../Components/VerticalTabs/VerticalTabs';
import Appbar from '../../Components/AppBar/AppBar';
import CardComponents from '../../Components/Card/Card';
import { Search } from '@mui/icons-material';
import post from '../HomePage/Posts';

 {/* variable for test-Posts  */}
// const testPosts = [
//   {
//     username: 'Sundus Ta',
//     userImage: '../public/images/girlprof.png',
//     timePublished: 'October 3, 2024, 12:00 pm',
//     postDetails: {
//       postImage: '../public/images/books.jpg',
//       address: 'Jaffa',
//       description: 'Used dress for Sale',
//       size: 'Large',
//       color: 'White',
//       price: 200,
//       currency: '₪',
//       likes: 50,
//       comments: [
//         { username: 'Ali', comment: 'Nice dress' },
//         { username: 'Sara', comment: 'I love it!' },
//       ],
//     },
//     profilePic: '../public/images/profilepic.png',
//   },
//   {
//     username: 'Duha ki',
//     userImage: '../public/images/girlprof.png',
//     timePublished: 'October 3, 2024, 12:00 pm',
//     postDetails: {
//       postImage: '../public/images/laptop.jpg',
//       address: 'Jerusalem',
//       description: 'Used dress for Sale',
//       size: 'Large',
//       color: 'White',
//       price: 200,
//       currency: '₪',
//       likes: 50,
//       comments: [
//         { username: 'Amer', comment: 'Nice dress' },
//         { username: 'Dana', comment: 'I love it!' },
//       ],
//     },
//     profilePic: '../public/images/profilepic.png',
//   },
// ];

function Discover() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userLocation, setUserLocation] = useState('');

  {/* Search default location by userLocation */}
  useEffect(() => {
    const location = localStorage.getItem('userLocation') || 'Jerusalem';
    setUserLocation(location);

    
     {/* Search by default location by Test-Posts  */}
     
  {/*const defaultPosts = testPosts.filter(
      (post) => post.postDetails.address.toLowerCase() === location.toLowerCase());
     setFilteredPosts(defaultPosts);
  }, []);
  */}

  {/* Search Location === userLocation  */}
  const defaultPosts = post.filter(
    (post) => post.postDetails.address.toLowerCase() === location.toLowerCase()
  );
  setFilteredPosts(defaultPosts);
}, []);

  {/* Search by location  */}
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // const searchedPosts = testPosts.filter((post) =>
    //   post.postDetails.address.toLowerCase().includes(term.toLowerCase())
    //)
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
        {/* Search bar */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            alignItems: 'center',
            borderRadius: '2rem',
            padding: '1rem 2rem',
            marginTop: '5vh',
            width: '30vw',
            bgcolor: '#e8f5e9',
            gap: '1rem',
          }}
        >
          <Search />
          <InputBase
            placeholder="Search by location..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </Box>
          {/* Show posts */}
        <Grid container spacing={3} justifyContent="center">
          {filteredPosts.map((post, id) => (
            <Grid item xs={12} sm={6} md={4} key={id} >
              <CardComponents {...post} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default Discover;
