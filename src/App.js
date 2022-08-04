// import logo from './logo.svg';
// import './App.css';

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListGames from "./containers/ListGames";
import GameDetailPage from "./containers/GameDetailPage";
// import CardGames from "./components/CardGames";

function App() {
  const [gameDataOn, setGameDataOn] = useState([]);
  // const [gameDataId, setGameDataId] = useState([]);
  useEffect(() => {
    const fetchDataGame = async () => {
      try {
        const response = await axios.get(
          "https://api.rawg.io/api/games?key=9a10134585be4b648e6bbb6762822341&page=1"
        );
        setGameDataOn(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDataGame();
  }, []);

  // function getGames() {
  //   return gameDataOn;
  // }

  // useEffect(() => {
  //   let semuaGames = getGames();
  //   setGameDataId(semuaGames);
  // }, []);

  // console.log(getGames());
  // console.log(gameDataOn);
  // console.log(gameDataId);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ListGames games={gameDataOn} />
              <Footer />
            </>
          }
        />
        <Route
          path="/games"
          element={
            <>
              <Header />
              <ListGames games={gameDataOn} />
              <Footer />
            </>
          }
        />
        {/* child route */}

        <Route
          path="/games/:id"
          element={
            <>
              <Header />
              <GameDetailPage games={gameDataOn} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
