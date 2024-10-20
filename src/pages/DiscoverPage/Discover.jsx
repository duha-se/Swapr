// import React, { useEffect, useState } from "react";
// import { Box, InputBase, Grid2 } from "@mui/material";
// import { Search } from "@mui/icons-material";
// import VerticalTabs from "../../Components/VerticalTabs/VerticalTabs";
// import Appbar from "../../Components/AppBar/AppBar";
// import CardComponents from "../../Components/Card/Card";
// import Footer from "../Footer/Footer";
// import profilePic from "../../assets/girlprof.png";

// import post from "../../Json/Posts";

// const DiscoverPage = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredPosts, setFilteredPosts] = useState([]);
//   const [userLocation, setUserLocation] = useState("");

//   const styledContain = {
//     color: " #d0efce",
//     backgroundColor: " #255b4e",
//     boxShadow: " 0 4px 8px rgba(0, 0, 0, 0.1)",
//     borderRadius: " 5px",
//     width: "600px",
//     height: "30rem",
//   };

//   useEffect(() => {
//     const location = localStorage.getItem("userLocation") || "Jerusalem";
//     setUserLocation(location);

//     const defaultPosts = post.filter(
//       (post) =>
//         post.postDetails.address.toLowerCase() === location.toLowerCase()
//     );
//     setFilteredPosts(defaultPosts);
//   }, []);

//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     const searchedPosts = post.filter((post) =>
//       post.postDetails.address.toLowerCase().includes(term.toLowerCase())
//     );
//     setFilteredPosts(searchedPosts);
//   };

//   return (
//     <>
//       <Appbar />
//       <VerticalTabs />
//       <Box
//         sx={{
//           display: "grid",
//           gridTemplateRows: "auto 1fr",
//           alignItems: "center",
//           justifyItems: "center",
//           padding: "2rem",
//           gap: "0.5rem",
//           marginBottom: "6vh",
//         }}
//       >
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: "auto 1fr",
//             alignItems: "center",
//             borderRadius: "2rem",
//             padding: "1rem 2rem",
//             marginTop: "5vh",
//             width: "30vw",
//             bgcolor: "#255b4e",
//             color: "#d0efce",
//             gap: "1rem",
//           }}
//         >
//           <Search />
//           <InputBase
//             placeholder="Search by location..."
//             value={searchTerm}
//             onChange={handleSearch}
//             sx={{
//               color: "#d0efce",
//             }}
//           />
//         </Box>

//         <Box sx={styledContain}>
//           <Grid2
//             xs={8}
//             sm={6}
//             container
//             direction="column"
//             alignItems="center"
//             justifyContent="center"
//             spacing={2}
//             paddingBottom="5.5rem"
//           >
//             {filteredPosts.slice(0, 1).map((post, id) => (
//               <Grid2 xs={8} sm={6} item="true" key={id}>
//                 <CardComponents
//                   username={post.username}
//                   userImage={post.userImage}
//                   timePublished={post.timePublished}
//                   postDetails={post.postDetails}
//                   profilePic={profilePic}
//                 />
//               </Grid2>
//             ))}
//           </Grid2>
//         </Box>
//       </Box>
//       <Footer />
//     </>
//   );
// };

// export default DiscoverPage;
import React, { useEffect, useState } from "react";
import { Box, InputBase, Typography, Grid2 } from "@mui/material";
import { Search } from "@mui/icons-material";
import VerticalTabs from "../../Components/VerticalTabs/VerticalTabs";
import Appbar from "../../Components/AppBar/AppBar";
import CardComponents from "../../Components/Card/Card";
import Footer from "../Footer/Footer";
import profilePic from "../../assets/girlprof.png";
import post from "../../Json/Posts";

const DiscoverPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [userLocation, setUserLocation] = useState("");

  useEffect(() => {
    const location = localStorage.getItem("userLocation") || "jerusalem";
    setUserLocation(location);

    const defaultPosts = post.filter(
      (p) =>
        p.postDetails &&
        p.postDetails.address &&
        p.postDetails.address.toLowerCase() === location.toLowerCase()
    );
    setFilteredPosts(defaultPosts);
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const searchedPosts = post.filter(
      (p) =>
        p.postDetails &&
        p.postDetails.address &&
        p.postDetails.address.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPosts(searchedPosts);
  };

  return (
    <>
      <Appbar />
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
            color: "#d0efce",
            gap: "1rem",
          }}
        >
          <Search />
          <InputBase
            placeholder="Search by location..."
            value={searchTerm}
            onChange={handleSearch}
            sx={{ color: "#d0efce" }}
          />
        </Box>

        {filteredPosts.length > 0 ? (
          <Box
            sx={{
              width: "600px",
              height: "30rem",
              padding: "1rem",
            }}
          >
            <Grid2
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              paddingBottom="5.5rem"
            >
              {filteredPosts.map((post, id) => (
                <Grid2 item key={id}>
                  <CardComponents
                    username={post.username}
                    userImage={post.userImage}
                    timePublished={post.timePublished}
                    postDetails={post.postDetails}
                    profilePic={profilePic}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Box>
        ) : (
          <Typography variant="h6" color="#d0efce" sx={{ marginTop: "5vh" }}>
            No posts found for your location.
          </Typography>
        )}
      </Box>
      <Footer />
    </>
  );
};

export default DiscoverPage;
