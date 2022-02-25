import { Grid, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { fontWeight } from "@mui/system";
import React from "react"

const spacingFactor = 2;

const SpeechBubbleDiv = styled('div')(({ theme }) => ({
  // // width: "300px",
  // // margin: "50px auto",
  // border: "3px solid white",
  // borderRadius: "10px",
  // // padding: "20px",
  // // textAlign: "center",
  // fontWeight: "900",
  // // color: "#00bfb6",
  position: "relative",
  '&::before': {
    content: '""',
    width: "0px",
    height: "0px",
    position: "absolute",
    borderLeft: "10px solid transparent",
    borderRight: "10px solid white",
    borderTop: "10px solid transparent",
    borderBottom: "10px solid transparent",
    right: "100%",
    top: "17px",
    // transform: 'rotate(45deg)',
  }
}))

const InterviewSpeaker = ({speaker, children}) => {
  return (
  <>
  <Box
    component="p"
    sx={{
      my: spacingFactor * 2
    }}
  >
  <Grid container spacing={2}>
      <Grid item xs={3}>
        <Typography 
          sx={{ 
            textAlign: "right",
            fontWeight: "bold" ,
            py: spacingFactor
          }}
        >
          { speaker }:
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <SpeechBubbleDiv
          sx={{
            display: 'inline-block',
            border: 1,
            borderRadius: spacingFactor * 2,
            p: spacingFactor,
            lineHeight: 1.75
          }}
        >
        { children }
        </SpeechBubbleDiv>
      </Grid>
    </Grid>
  </Box>
  </>
  );
};

export default InterviewSpeaker;
