import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired
};

const Navbar = (props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar>
          <Container sx={{ maxWidth: { sm: 720, md: 1236 } }}>
            <Toolbar disableGutters>
              <MenuIcon color="primary" sx={{ mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none"
                }}>
                VQ
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
