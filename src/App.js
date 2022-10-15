import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import NavBar from "./components/NavBar";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import GameWin from "./pages/GameWin";
import Login from "./components/Login";

import backgroundVideo from "./assets/forestbg.mp4";


// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";

function App() {

  return (
    <div className="main">
      <video src={backgroundVideo} type="video/mp4" autoPlay loop muted />
      <div className="content">

        <NavBar />

        <div className="line"></div>
        <div className=" justify-center pl-10 pr-10 pt-3 ">
          <AnimatePresence>
            <Routes
            >
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} />
              <Route path="/game" element={<Game />} />
              <Route path="/gameover" element={<GameOver />} />
              <Route path="/gamewin" element={<GameWin />} />
            </Routes>
          </AnimatePresence>
        </div>
        {/* <AuthVerify logOut={this.logOut}/> */}
      </div>
    </div>
  );

}

export default App;
