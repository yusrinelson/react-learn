import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./About.css";

export default function About() {
  return (
    <div>
      <header className="about-header">
        <div className="about-header__content">
        <h1>ABOUT</h1>
        <p>
          <Link to={"/"} className="about-nav__headings">Home</Link> / <Link to={"/user/yusri nelson"} className="about-nav__headings">Profile</Link>
        </p>
        <Outlet />
        </div>
      </header>
      <div className="about-content">
        <h2>Welcome to LikeIT</h2>
        <p>
        LikeIT is a platform that allows users to explore a collection of carefully curated images within the fashion industry. 
          With a simple click, you can like your favorite items, and they will be saved to your personalized profile for easy access.
        </p>
        
        <p>
          Our goal is to provide a seamless and interactive experience where you can:
        </p>
        <ul className="about-list">
          <li>Browse through diverse categories of visually appealing clothing content.</li>
          <li>Like and save your favorite items to create a personalized collection.</li>
          <li>View and manage all your liked images directly from your user profile.</li>
        </ul>

        <p>
          If you are a fashion lover, you have come to the right place.
          likeIT is designed to make your experience enjoyable and intuitive. 
          Start building your own visual journey through the items you love.
        </p>
        
        <p>Feel free to explore, like, and share!</p>
      </div>
    </div>
  );
}
