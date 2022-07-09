import React, { useEffect, useRef, useContext } from "react";
import PropTypes from "prop-types";

// MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";

// 3rd Party Imports
import AOS from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";

// Project Imports
import { AppContext } from "../context";
import CContainer from "../components/CContainer";
import waiting from "../assets/animations/waiting.json";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Feature = ({ fname, fdesc, icon }) => {
  return (
    <Box data-aos="fade-up">
      <Box display="flex" alignItems="center" flexDirection="column" textAlign="center">
        <Avatar
          sx={{ mb: 2, background: "#1F3946", width: "60px", height: "60px", color: "#00ab55" }}>
          {icon}
        </Avatar>
        <Typography sx={{ mb: 1 }} variant="h6">
          {fname}
        </Typography>
        <Typography variant="body1">{fdesc}</Typography>
      </Box>
    </Box>
  );
};

Feature.propTypes = {
  fname: PropTypes.string.isRequired,
  fdesc: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

const HeadLine = ({ children, ...rest }) => {
  return (
    <Typography
      {...rest}
      variant="h2"
      sx={{ fontSize: { xs: "2.375rem", sm: "3.75rem" }, fontWeight: 700 }}>
      {children}
    </Typography>
  );
};

HeadLine.propTypes = {
  children: PropTypes.any
};

const Home = () => {
  const container = useRef(null);
  const { state, actions } = useContext(AppContext);

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 500,
      delay: 50
    });
    AOS.refresh();

    const anim1 = lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: waiting // the path to the animation json
    });

    return () => {
      anim1.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Box>
        <CContainer>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} sx={{ display: "flex", alignItems: "center" }}>
              <Box data-aos="fade-right">
                <Box mb={2}>
                  <HeadLine>
                    Stop waiting in <br />
                    lengthy{" "}
                    <HeadLine component="span" color="primary">
                      Queue.
                    </HeadLine>
                  </HeadLine>
                </Box>
                <Box mb={3}>
                  <Typography variant="h6" sx={{ color: "#aeb0b4" }}>
                    With <HeadLine component="span" color="primary"></HeadLine>{" "}
                    <Typography component={"span"} color="primary" variant="h6">
                      Virtual Queue
                    </Typography>{" "}
                    You can stay in queue without being in a queue.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: { xs: "column", sm: "row" }
                  }}>
                  {!state.isAuth ? (
                    <Button
                      variant="contained"
                      sx={{ width: { xs: "100%", md: "auto" } }}
                      href="/auth">
                      Login Now
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      sx={{ width: { xs: "100%", md: "auto" } }}
                      href="/queue">
                      Go to Queue
                    </Button>
                  )}
                  <Button
                    variant="outlined"
                    sx={{ ml: { sm: 2 }, mt: { xs: 2, sm: 0 }, width: { xs: "100%", md: "auto" } }}>
                    Explore
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid ref={container} item xs={12} md={6} />
          </Grid>
        </CContainer>
      </Box>
      <Box sx={{ background: "#222B45" }}>
        <CContainer sx={{ py: { md: 8 }, px: 0 }}>
          <Grid container>
            <Grid item xs={12} md={4} sx={{ pl: 2, pt: 2 }}>
              <Feature
                fname={"Saves your precious time"}
                fdesc="VQUEUE makes you save your time by allowing you to join any queue without standing in the long queue.
"
                icon={<AccessTimeIcon />}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ pl: 2, pt: 2 }}>
              <Feature
                fname={"Join from your home"}
                fdesc="VQUEUE lets you join any queue from the comfort of your home. Just search the queue and scan QR of the queue.
"
                icon={<HomeIcon />}
              />
            </Grid>
            <Grid item xs={12} md={4} sx={{ pl: 2, pt: 2 }}>
              <Feature
                fname={"Create your queue"}
                fdesc="VQUEUE allows you to manage your own queue by just registering and generating a QR code at VQUEUE at free of cost.
"
                icon={<GroupsIcon />}
              />
            </Grid>
          </Grid>
        </CContainer>
      </Box>
      <Divider />
      <Box sx={{ background: "#222B45" }}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
