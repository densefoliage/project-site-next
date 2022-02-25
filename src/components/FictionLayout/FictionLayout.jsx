import { Box, Typography } from "@mui/material";
import React from "react";

const FictionLayout = ({ content, renderMDX }) => {

  const renderChapter = ( chapter, i ) => {
    return < OtherFormat chapter={chapter} renderMDX={renderMDX} i={i} />
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
              { renderChapter( chapter, i ) }
            </Box>
          )
        })}
    </>
  )
};

const OtherFormat = ({ chapter, renderMDX, i }) => {
  const { frontMatter, mdxSource } = chapter;
  return (
    <>
    <Box 
      sx={{ 
        maxWidth: "md",
        mx: "auto"
      }} 
    >
    <Typography variant="h2">
      { frontMatter.section == "main" ? `Chapter ${i}` : "Appendix" }: { frontMatter.subtitle }
    </Typography>
    { renderMDX(mdxSource) }
    <br/>
    <hr/>
    <br/>
    </Box>
    </>
  );
}

export default FictionLayout;
