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
    <>
        { content.map( (chapter, i) => {
          return (
            <Box key={i}>
              { renderChapter( chapter ) }
            </Box>
          )
        })}
    </>
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
        mx: "auto"
      }} 
    >
      { renderMDX(mdxSource) }
      <Typography variant="h1" sx={{ textTransform: "lowercase "}}>
        <Box 
          sx={{ 
            fontSize: "body1.fontSize", 
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
        by { frontMatter.authors }
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
