import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GameDetailPage = ({ games }) => {
  const [game, setGame] = useState({});

  let params = useParams();

  useEffect(() => {
    function getGame(gameID) {
      return games.find((game) => game.id === gameID);
    }
    const gameTerpilih = getGame(parseInt(params.id));
    setGame(gameTerpilih);
    // console.log(gameTerpilih);
  }, [params.id, games]);

  return (
    <>
      <div>id game: {params.id}</div>
      <div>nama game: {game?.name} </div>
      <div>
        <img src={game?.background_image} alt="imagee" width="400px" />
      </div>
    </>
  );
};

export default GameDetailPage;
