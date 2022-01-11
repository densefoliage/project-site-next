import React from "react";
import { Container, Toolbar, AppBar, IconButton, Fab } from "@mui/material";
import { styled } from "@mui/system";

import Home from "@mui/icons-material/Home"
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp"

import MuiNextLink from "@components/MuiNextLink";
import NavigationBar from "@components/NavigationBar";
import SideDrawer from "@components/SideDrawer";
import HideOnScroll from "@components/HideOnScroll";
import BackToTop from "@components/BackToTop";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: `home`, path: `/` },
  { title: `about`, path: `/about` },
  { title: `contact`, path: `/contact` },
];

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container
              maxWidth="lg"
              sx={{ display: `flex`, justifyContent: `space-between` }}
            >

              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Home
                    sx={{
                      color: (theme) => theme.palette.common.white,
                    }}
                    fontSize="large"
                  />
                </MuiNextLink>
              </IconButton>

              <NavigationBar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />

            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Offset id="back-to-top-anchor" />

      <BackToTop>
  <Fab color="secondary" size="large" aria-label="back to top">
    <KeyboardArrowUp />
  </Fab>
</BackToTop>
    </>
  );
};

export default Header;