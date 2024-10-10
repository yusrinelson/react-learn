import Navbar from "./Navbar.js";
import { Link, Outlet } from "react-router-dom";

export default function Home() {

  return (
    <div>
      <Navbar/>
      <header>
        <ul className="sub-navbar">
          <Link to={"/home/topwear"} className="sub-headings"><li>Top Wear</li></Link>
          <Link to={"/home/bottomwear"} className="sub-headings"><li>Bottom Wear</li></Link>
          <Link to={"/home/shoes"} className="sub-headings"><li>Shoes</li></Link>
        </ul>
      </header>
      <Outlet/>
    </div>
  );
}
