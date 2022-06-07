import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const spacingFactor = 2;
const addBrackets = false;

const StageDirection = ({ children }) => {
  return (
    <>
    <Box
      component="p"
      sx={{
        my: spacingFactor * 4,
        display: "flex",
      }}
    >
          <Box
            sx={{
              display: "inline-block",
              fontStyle: "italic",
              textAlign: "justify",
              lineHeight: 1.5,
              maxWidth: 0.5,
              mx: 'auto'
            }}
          >
          { addBrackets ? "(" : ""}
          { children }
          { addBrackets ? ")" : ""}
          </Box>
    </Box>
    </>
    );
};

export default StageDirection;
