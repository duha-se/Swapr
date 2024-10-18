import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage/Home";
import Footer from "./pages/Footer/Footer";
import MessagesPage from "./pages/Messages/MessagesPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import FriendsList from "./Components/Pop-up/FriendsList/FriendsList";
import "./App.css";


const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/home" />
        {/* <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<ProfilePage />} path="/profile" />
        <Route element={<DiscoverPage />} path="/discover" /> */}
        <Route element={<FriendsList />} path="/friendsList" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<MessagesPage />} path="/messages" />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
