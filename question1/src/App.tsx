import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import SideBar from "./components/SideBar";
import Banner from "./components/Banner";
import Post from "./components/Post";

function App() {
  return (
    <>
      <div className="grid grid-cols-8">
        <div>
          <SideBar />
        </div>
        <div className="col-span-7 container mx-auto">
          <div>
            <Logo />
            <Banner />
            <div className="flex space-x-[10px] mt-[20px]">
              <Post />
              <Post />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
