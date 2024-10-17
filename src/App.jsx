import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import Footer from "./pages/Footer/Footer";
import MessagesPage from "./pages/Messages/MessagesPage";
import DiscoverPage from "./pages/DiscoverPage/Discover";
import SearchPage from "./pages/SearchPage/SearchPage";
import FriendsList from "./Components/Pop-up/FriendsList/FriendsList";

import LoginPage from "./pages/Login/LoginPage";

import "./App.css";
import SignUpForm from "./pages/SignUpPage/SignUp";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/home" />
        {/* <Route element={<ProfilePage />} path="/profile" /> */}
        <Route element={<DiscoverPage />} path="/discover" />
        <Route element={<FriendsList />} path="/friendsList" />
        <Route element={<SearchPage />} path="/search" />
        <Route element={<MessagesPage />} path="/messages" />
        <Route element={<SignUpForm />} path="/signup" />
        {/* <Route element={<MessagesPage />} path="/messages" /> */}
        <Route element={<LoginPage />} path="/login" />
        <Route element={<LoginPage />} path="/" />

        {/* <Route element={<SignUp />} path="/signup" /> */}
      </Routes>
    </>
  );
};

export default App;
