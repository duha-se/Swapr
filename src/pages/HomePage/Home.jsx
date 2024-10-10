import React from "react";
import logo from "../../assets/lo.png";
import profilePic from "../../assets/girlprof.png";
import thinkingFace from "../../assets/ThinkingFace.svg";
import posts from "./Posts";

import "./Home.css";

function HomePage() {
  return (
    <div>
      {/* {posts} */}
      <div>
        {/* Horizontal Tabs at the top */}
        <div className="hor-tabs">
          <div className="home-tab">
            <img className="home-img" src={logo} alt="Logo" />
          </div>
          <div className="right-side-tab">
            
            <img className="img-profile" src={profilePic} alt="Profile" />
            <p>Duha Ki</p>
          </div>
        </div>

        {/* Vertical Tabs on the left */}
        <div className="main-content">
          <div className="vertical-tabs">
            <div className="tab-item">
              <i className="fa-solid fa-house" style={{ color: "#d0efce" }}></i>
              Home
            </div>
            <div className="tab-item">
              <i className="fa-regular fa-id-badge" style={{ color: "#d0efce" }}></i>
              Profile
            </div>
            <div className="tab-item">
              <i className="fa-brands fa-wpexplorer" style={{ color: "#d0efce" }}></i>
              Discover
            </div>
            <div className="tab-item">
              <i className="fa-solid fa-message" style={{ color: "#d0efce" }}></i>
              Messages
            </div>
            <div className="tab-item">
              <i className="fa-solid fa-rectangle-list" style={{ color: "#d0efce" }}></i>
              Friends List
            </div>
            <div className="tab-item">
              <i className="fa-solid fa-magnifying-glass" style={{ color: "#d0efce" }}></i>
              Search
            </div>
            <div className="tab-item">
              <i className="fa-solid fa-right-from-bracket" style={{ color: "#d0efce" }}></i>
              Log out
            </div>
          </div>

          <button className="new-post-button">Add New Post</button>
        </div>
<div>
        {/* Map through the posts and display them */}
        {posts.map((post, index) => (
          // <div>{post.postDetails.address}</div>
          <div key={index} className="user-contain">
            <div className="username-time-div">
              <img src={post.userImage} alt="User profile" />
              <h3>{post.username}</h3>
              <time>{new Date(post.timePublished).toLocaleString()}</time>
            </div>

            <div className="product-card">
              <img src={post.postDetails.postImage} alt="Post" />
              <div className="product-info">
                <p>{post.postDetails.description}</p>
                <p>Color: {post.postDetails.color}</p>
                <p>Size: {post.postDetails.size}</p>
                <p>
                  Price: {post.postDetails.price}
                  {post.postDetails.currency}
                </p>
                <p>Location: {post.postDetails.address}</p>
              </div>
            </div>

            <div className="interact-bar">
              <p>{post.postDetails.likes} Likes</p>
              <button>
 <img className="icon" src={thinkingFace}/>
 
</button>
 <button>
    <i className="fa-solid fa-magnet fa-2xl" style={{color: "black"}}></i>
</button>
<button className="icon-comment" title="comment"><i className="fa-solid fa-comment-dots fa-2xl" style={{color: "#000000"}}></i></button>

            </div>

            <div className="comments-section">
              {post.postDetails.comments.map((comment, commentIndex) => (
                <div key={commentIndex} className="comment">
                  <p>
                    <span className="username">{comment.username}:</span>
                    <span className="comment-text">{comment.comment}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
