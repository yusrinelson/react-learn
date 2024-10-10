import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import "./UserProfile.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function UserProfile({ liked, likedItems, toggleHearts }) {
  const [loading, setLoading] = useState([]);
  const {userName} = useParams();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      setProfile({name: userName});
    }
    fetchProfile();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [userName]);

  const displayLikeditems = likedItems.map((item) => {
    return (
      <div key={item.id}>
        <div className="items-box">
          <img src={item.imageSrc} alt={item.name} className="items" />
          <p>{item.name}</p>
          {liked[item.id] ? (
            <FaHeart
              className="heart-icon"
              onClick={() => toggleHearts(item)}
            />
          ) : (
            <FaRegHeart
              className="heart-icon"
              onClick={() => toggleHearts(item)}
            />
          )}
        </div>
      </div>
    );
  });
  return (
    <div>
      <header className="user-header">
        <div className="user-header__content">
          <h1>{profile? profile.name : "no user name yet"}</h1>
          <p>
            <Link to={"/home"} className="user-nav__headings">
              Home
            </Link>{" "}
            /
            <Link to={"/about"} className="user-nav__headings">
              About
            </Link>
          </p>
        </div>
        <Outlet />
      </header>

      {loading ? (
        <p className="loading-state">Loading...</p>
      ) : (
        <div className="items-container user-items__container ">
          {displayLikeditems.length > 0 ? (
            displayLikeditems
          ) : (
            <p>{userName}, you do not have any liked items :(</p>
          )}
        </div>
      )}
    </div>
  );
}
