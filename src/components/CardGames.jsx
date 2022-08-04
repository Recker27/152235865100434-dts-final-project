import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Platform from "./Platform";

const CardGames = ({ game }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={game.background_image}
            alt="game image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {game.name}
            </Typography>
            <Platform game={game} />
            <Typography variant="body2" sx={{ marginTop: "0.5em" }}>
              Release Date: {game.released}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link to={`${game.id}`}>Detail</Link>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardGames;
