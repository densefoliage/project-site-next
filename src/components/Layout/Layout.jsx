import React from "react";
import Head from 'next/head'

import { Box, styled } from "@mui/system";
import { Fab } from "@mui/material";

import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import MiniDrawer from "@components/MiniDrawer";
import BackToTop from "@components/BackToTop";
import Footer from "@components/Footer";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout = ({ title, description, navLinks, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div id="back-to-top-anchor" />
      <MiniDrawer navLinks={navLinks}>
        <Box
          sx={{
            mx: "auto" 
          }}
        >
            {children}
        </Box>
        <Footer />
      </MiniDrawer>
      <BackToTop>
        <Fab size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Layout;
