import React from "react";
import { Box } from "@mui/material";
import playstation from "../assets/playstation.png";
import xbox from "../assets/xbox.png";
import pc from "../assets/pc.png";
import nintendo from "../assets/nintendo.png";
import ios from "../assets/apple.png";
import android from "../assets/android.png";
import mac from "../assets/mac.png";
import linux from "../assets/linux.png";
import atari from "../assets/atari.png";
import commodore from "../assets/commodore-amiga.png";
import sega from "../assets/sega.png";
import web from "../assets/web.png";

const Platform = ({ game }) => {
  let gpp = game.parent_platforms;
  const arrayPlatform = [];
  for (let i = 0; i < gpp.length; i++) {
    if (gpp[i].platform.slug === "playstation") {
      arrayPlatform.push(playstation);
    } else if (gpp[i].platform.slug === "xbox") {
      arrayPlatform.push(xbox);
    } else if (gpp[i].platform.slug === "pc") {
      arrayPlatform.push(pc);
    } else if (gpp[i].platform.slug === "nintendo") {
      arrayPlatform.push(nintendo);
    } else if (gpp[i].platform.slug === "ios") {
      arrayPlatform.push(ios);
    } else if (gpp[i].platform.slug === "android") {
      arrayPlatform.push(android);
    } else if (gpp[i].platform.slug === "mac") {
      arrayPlatform.push(mac);
    } else if (gpp[i].platform.slug === "linux") {
      arrayPlatform.push(linux);
    } else if (gpp[i].platform.slug === "atari") {
      arrayPlatform.push(atari);
    } else if (gpp[i].platform.slug === "commodore-amiga") {
      arrayPlatform.push(commodore);
    } else if (gpp[i].platform.slug === "sega") {
      arrayPlatform.push(sega);
    } else if (gpp[i].platform.slug === "web") {
      arrayPlatform.push(web);
    }
  }

  return (
    <>
      <Box sx={{ display: "flex", gap: "0.5em" }}>
        {arrayPlatform.map((item, index) => {
          return (
            <img
              src={item}
              alt="platform"
              width="20px"
              key={gpp[index].platform.id}
            />
          );
        })}
      </Box>
    </>
  );
};

export default Platform;
