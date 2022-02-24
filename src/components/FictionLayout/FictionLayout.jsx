import { Box, Typography } from "@mui/material";
import React from "react";

const FictionLayout = ({ content, renderMDX }) => {

  const renderChapter = ( chapter ) => {
    return < OtherFormat chapter={chapter} renderMDX={renderMDX} />
    switch (chapter.frontMatter.format) {
      // case "a/b":
        // return < ABFormat chapter={chapter} renderMDX={renderMDX} />
      default:
        return < OtherFormat chapter={chapter} renderMDX={renderMDX} />
    }
  };

  return (
    <>
        <Typography variant="h1">{ content[0].frontMatter.title }</Typography>
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

const OtherFormat = ({ chapter, renderMDX }) => {
  const { frontMatter, mdxSource } = chapter;
  return (
    <>
    <Typography variant="h2">{ frontMatter.subtitle }</Typography>
    { renderMDX(mdxSource) }
    <br/>
    <hr/>
    <br/>
    </>
  );
}

export default FictionLayout;
