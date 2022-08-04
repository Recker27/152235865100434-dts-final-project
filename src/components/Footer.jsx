import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "Black",
          padding: "24px",
          width: "100%",
          color: "white",
          marginTop: "2em",
        }}
      >
        <Typography
          variant="body2"
          sx={{ margin: "0 auto", textAlign: "center" }}
        >
          created by Muhammad Fikri
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
