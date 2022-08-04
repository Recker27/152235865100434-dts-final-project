import React from "react";
import { Box, Container } from "@mui/material";
// import gameData from "../data/data.json";
import CardGames from "../components/CardGames";

const ListGames = ({ games: gameDataOn }) => {
  // const [gameDataOn, setGameDataOn] = useState([]);
  // useEffect(() => {
  //   const fetchDataGame = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://api.rawg.io/api/games?key=9a10134585be4b648e6bbb6762822341&page=1"
  //       );
  //       console.log(response);
  //       setGameDataOn(response.data.results);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchDataGame();
  // }, []);

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "1em",
            marginTop: "2em",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {gameDataOn.map((game) => {
            return <CardGames key={game.id} game={game} />;
          })}
        </Box>
      </Container>
    </>
  );
};

export default ListGames;
