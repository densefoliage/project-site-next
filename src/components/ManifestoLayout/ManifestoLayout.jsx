import React from "react";
import { Box, Container, Typography } from "@mui/material";

const ManifestoLayout = ({ content, renderMDX }) => {

  const renderChapter = ( chapter ) => {
    switch (chapter.frontMatter.format) {
      case "a/b":
        return < ABFormat chapter={chapter} renderMDX={renderMDX} />
      default:
        return < OtherFormat chapter={chapter} renderMDX={renderMDX} />
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
        { content.map( (chapter, i) => {
          return (
            <Box key={i}>
              { renderChapter( chapter ) }
            </Box>
          )
        })}
    </Box>
  )
};

const ABFormat = ({ chapter, renderMDX }) => {
  const { frontMatter, mdxSource } = chapter;
  return (
    <Box 
      sx={{ 
        border: 1,
        borderRadius: 6,
        p: 4,
        maxWidth: 490,
        m: 2,
        fontSize: "1rem"
      }} 
    >
      { renderMDX(mdxSource) }
      <Typography variant="h1">
        <Box 
          sx={{ 
            textTransform: "lowercase",
            fontSize: "1rem",
            fontWeight: "bold",
            mt: 3,
            mb: 1.5,
          }}
        >
          { frontMatter.title }
        </Box>
      </Typography>
      <Typography 
        sx={{ 
          textTransform: "lowercase",
          mb: 1.5,
        }} 
      >
        <Box
        sx={{ 
          fontSize: "1rem",
        }} 
        >
        by { frontMatter.authors }
        </Box>
      </Typography>
      <Typography>work-in-progress, version {frontMatter.version}</Typography>
    </Box>
  );
};

const OtherFormat = ({ chapter, renderMDX }) => {
  return (
    <>
      { renderMDX(chapter.mdxSource) }
    </>
  );
}

export default ManifestoLayout;
