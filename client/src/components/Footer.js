import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import AssignmentIcon from "@mui/icons-material/Assignment";

// Project Imports
import CContainer from "../components/CContainer";

const Footer = () => {
  return (
    <CContainer sx={{ py: { md: 6 } }}>
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "space-between"
            }}>
            <Box component="a" href="/" mb={{ xs: 1, sm: 0 }}>
              VQ
            </Box>
            <Box display="flex" alignItems="center">
              <Typography component="a" href="/" sx={{ mt: 1, mr: 2 }}>
                Home
              </Typography>
              <Button sx={{ mt: 1 }} variant="outlined" size="small" href="/auth" color="primary">
                Login Now
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} item>
          <Typography variant="body2" align="center">
            &#169; Virtual Queue {new Date().getFullYear()}. All rights reserved
          </Typography>
        </Grid>
      </Grid>
    </CContainer>
  );
};

export default Footer;
