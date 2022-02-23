import React from "react";
import { Box, Typography } from "@mui/material";

const components = {};

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
      <div>
        { content.map( (chapter, i) => {
          return (
            <Box key={i}>
              {console.log(chapter)}
              { renderChapter( chapter ) }
            </Box>
          )
        })}
      </div>
    </>
  )
};

const ABFormat = ({ chapter, renderMDX }) => {
  const { frontMatter, mdxSource } = chapter;
  return (
    <Box 
      sx={{ 
        border: 1,
        borderRadius: 8,
        p: 4,
        maxWidth: 'sm'
      }} 
    >
      { renderMDX(mdxSource) }
      <Typography variant="h1" sx={{ textTransform: "lowercase "}}>
        <Box 
          sx={{ 
            fontSize: "body1.fontSize", 
            fontWeight: "bold",
            mt: 4,
            mb: 2,
          }}
        >
          { frontMatter.title }
        </Box>
      </Typography>
      <Typography 
        sx={{ 
          textTransform: "lowercase",
          mb: 2,
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
    <Box>
      { renderMDX(chapter.mdxSource) }
    </Box>
  );
}

const SmallH1 = (props) => {
  return (
    <Typography {...props} variant="h1">
      <Box sx={{ fontSize: "body1.fontSize", fontWeight: "bold" }}>
        {props.children}
      </Box>
    </Typography>
  )
}

export default ManifestoLayout;
