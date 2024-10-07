import React, { useEffect, useState } from "react";
import { items } from "../items.js";

export default function BottomWear() {
    const [showItems, setShowItems] = useState([]);

    useEffect(() => {
      setShowItems(items);
      console.log(items);
    }, []);
  
    const displayItems = showItems.map((item, id) => {
      return (
        <div key={id}>
          <img src={item.imageSrc} alt={item.name} />
          <p>{item.id}</p>
          <p>{item.price}</p>
        </div>
      );
    });
  return (
    <div>{displayItems}</div>
    
  )
}