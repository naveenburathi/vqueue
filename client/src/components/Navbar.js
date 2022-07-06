import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Project Imports
import { AppContext } from "../context";

const HideOnScroll = ({ children }) => {
  console.log("hello");
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
  console.log("navbar rendered");
  const { state, actions } = useContext(AppContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <AppBar variant="dense">
          <Container sx={{ maxWidth: { sm: 720, md: 1236 } }}>
            <Toolbar disableGutters>
              <MenuIcon color="primary" sx={{ mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".1rem",
                  color: "inherit",
                  textDecoration: "none"
                }}>
                VQ
              </Typography>
              <Box flex={1} />
              {!state.isAuth ? (
                <Button variant="contained" href="/auth">
                  Login Now
                </Button>
              ) : (
                <>
                  <Button
                    id="user-button"
                    onClick={handleClick}
                    aria-controls={open ? "user-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}>
                    <Avatar sx={{ width: 48, height: 48, background: "#009357", color: "#fff" }}>
                      {state.user.name.charAt(0)}
                    </Avatar>
                  </Button>

                  <Menu
                    id="user-menu"
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{ "aria-labelledby": "user-button" }}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>
                      <Button href="/profile">Profile</Button>
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        // localStorage.removeItem("isAuth");
                        // localStorage.removeItem("user");
                        // console.log("removed");
                        setAnchorEl(null);
                        actions.logout();
                      }}>
                      <Button>Logout</Button>
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Navbar;
