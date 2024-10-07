// import React, { useEffect, useState } from "react";
// import { items } from "../items.js";
import Navbar from "./Navbar.js";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  // const [showItems, setShowItems] = useState([]);

  // useEffect(() => {
  //   setShowItems(items);
  //   console.log(items);
  // }, []);

  // const displayItems = showItems.map((item, id) => {
  //   return (
  //     <div key={id}>
  //       <img src={item.imageSrc} alt={item.name} />
  //       <p>{item.id}</p>
  //       <p>{item.price}</p>
  //     </div>
  //   );
  // });
  return (
    <div>
      <Navbar/>
      <header>
        <ul>
          <Link to={"/topwear"}><li>Top Wear</li></Link>
          <Link to={"/bottomwear"}><li>Bottom Wear</li></Link>
          <li>Shoes</li>
        </ul>
      </header>
      {/* {displayItems} */}
      <Outlet/>
    </div>
  );
}
