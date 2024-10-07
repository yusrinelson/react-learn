import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import TopWear from "./components/Home/TopWear";
import BottomWear from "./components/Home/BottomWear";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="topwear" element={<TopWear />} />
          <Route path="BottomWear" element={<BottomWear />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/userProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
