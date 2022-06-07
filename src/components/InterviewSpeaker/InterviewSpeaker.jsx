import { Grid, Box, Typography, Avatar, Container } from "@mui/material";
import { fontWeight } from "@mui/system";
import React from "react"

const spacingFactor = 2;

const InterviewSpeaker = ({speaker, children}) => {
  const alignment = speaker != "The Researcher" ? "left" : "right";

  return (
  <>
  <Box
    component="p"
    sx={{
      my: spacingFactor*2
    }}
  >
    <Box
    sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: alignment == "left" ? "row" : "row-reverse"
    }}
    >
    <Typography
      sx={{ 
        textAlign: "right",
        fontWeight: "bold" ,
      }}
    >
      { speaker }
    </Typography>
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: alignment == "left" ? "row" : "row-reverse"
      }}
    >
      <Box
            sx={{
              display: 'inline-block',
              textAlign: "justify",
              border: 1,
              p: spacingFactor,
              my: spacingFactor/2,
              lineHeight: 1.75,
              borderRadius: alignment == "left" ?
                theme => `0 ${theme.spacing(spacingFactor)} ${theme.spacing(spacingFactor)} ${theme.spacing(spacingFactor)}` :
                theme => `${theme.spacing(spacingFactor)} 0 ${theme.spacing(spacingFactor)} ${theme.spacing(spacingFactor)}`
            }}
          >
          { children }
        </Box>
    </Box>
  </Box>
  </>
  );
};

export default InterviewSpeaker;
