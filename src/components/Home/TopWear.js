import React, { useEffect, useState } from "react";
import { topWearItems } from "../items";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function TopWear({ liked, toggleHearts }) {
  const [showItems, setShowItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setShowItems(topWearItems);
    console.log(topWearItems);
    setLoading(false);
  }, []);

  const handleImageLoad = () => {
    setLoading(false);
  };
  const displayItems = showItems.map((item) => {
    return (
      <div key={item.id}>
        <div className="items-box">
          {/* {loading && <img src={item.imageSrc} alt={item.name} className="items" onLoad={handleImageLoad}/>} */}
          {loading ? (
            <div className="loading-placeholder">Loading...</div> 
          ) : null}
          <img src={item.imageSrc} alt={item.name} onLoad={handleImageLoad} className="items" />
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
    <div className="items-container">
      {loading ? <h1 className="loading-state">Loading...</h1> : displayItems}
    </div>
  );
}
