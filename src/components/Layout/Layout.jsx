import React from "react";
import Head from 'next/head'

import { styled } from "@mui/system";
import { Fab } from "@mui/material";
import { Container } from "@mui/material";

import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import MiniDrawer from "@components/MiniDrawer";
import BackToTop from "@components/BackToTop";
import Footer from "@components/Footer";

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about`, path: `/about` },
  { title: `project`, path: `/project` },
  { title: `blog`, path: `/blog` },
  { title: `contact`, path: `/contact` },
];

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <div id="back-to-top-anchor" />
      <MiniDrawer navLinks={navLinks}>
        <Container maxWidth="sm">
            {children}
          <Footer />
        </Container>
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
