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
        my: spacingFactor * 2
      }}
    >
    <Grid container spacing={2}>
        <Grid item xs={3} />
        <Grid item xs={9}>
          <Box
            sx={{
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.5,
              width: 0.5,
              mx: 'auto'
              // pl: spacingFactor * 8
            }}
          >
          { addBrackets ? "(" : ""}
          { children }
          { addBrackets ? ")" : ""}
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
    );
};

export default StageDirection;
