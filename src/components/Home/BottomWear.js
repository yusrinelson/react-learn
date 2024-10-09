import React, { useEffect, useState } from "react";
import { bottomWearItems } from "../items";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function BottomWear({ liked, toggleHearts }) {
  const [showItems, setShowItems] = useState([]);

  useEffect(() => {
    setShowItems(bottomWearItems);
    console.log(bottomWearItems);
  }, []);

  const displayItems = showItems.map((item) => {
    return (
      <div key={item.id}>
        <div className="items-box">
          <img src={item.imageSrc} alt={item.name} className="items" />
          <p>{item.name}</p>
          {liked[item.id] ? (
            <FaHeart className="heart-icon" onClick={() => toggleHearts(item)} />
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
  return <div className="items-container">{displayItems}</div>;
}
