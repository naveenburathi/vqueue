import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AOS from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";

import QueueAnimation from "../assets/animations/queuePageAnim";
import Navbar from "../components/Navbar";
import Img1 from "../assets/illustrations/step1.png";
import Footer from "../components/Footer";
import CContainer from "../components/CContainer";

export default function Queue() {
  const container = useRef(null);

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
      animationData: QueueAnimation // the path to the animation json
    });

    return () => {
      anim1.destroy();
    };
  }, []);

  return (
    <>
      <Navbar />
      <CContainer>
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">
          <Grid
            item
            md={6}
            ref={container}
            sx={{ width: "300px", height: "80%", display: { xs: "none", md: "block" } }}
          />
          <Grid item xs={12} md={6}>
            <Box data-aos="fade-left">
              <Box mb={2} sx={{ mt: { md: -10 } }}>
                <HeadLine>Lorem ipsum dolor sit amet</HeadLine>
              </Box>
              <Box mb={3}>
                <Typography variant="h6">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                  ametLorem ipsum dolor sit ametbr <br />
                  <br /> Lorem ipsum dolor sit ametLorem ipsum dolor
                </Typography>
              </Box>
              <Box>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    fontSize: { xs: 15, md: 20 },
                    width: { xs: "100%" },
                    mb: 3
                  }}
                  href="/create-queue">
                  Create Queue
                </Button>
                <Button
                  size="large"
                  variant="contained"
                  href="/join-queue"
                  sx={{
                    fontSize: { xs: 15, md: 20 },
                    width: { xs: "100%" }
                  }}>
                  Join Queue
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </CContainer>
      <Box sx={{ pr: 10, pl: 10, pt: 5, background: "#222B45" }}>
        <CContainer>
          <HeadLine style={{ textAlign: "center" }}>How It Works?</HeadLine>
          <Grid container direction="column">
            <Box
              sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Step 1
                </Typography>
                <Typography
                  sx={{ my: 1, fontWeight: 700, fontSize: "24px !important" }}
                  variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                  ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Box
                xs={9}
                component="img"
                src={Img1}
                sx={{
                  height: { md: 400 },
                  display: { xs: "none", md: "block" },
                  ml: 3
                }}></Box>
            </Box>
            <Box
              sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <Box
                xs={9}
                component="img"
                src={Img1}
                sx={{
                  height: { md: 400 },
                  display: { xs: "none", md: "block" },
                  mr: 3
                }}></Box>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Step 1
                </Typography>
                <Typography
                  sx={{ my: 1, fontWeight: 700, fontSize: "24px !important" }}
                  variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                  ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Step 1
                </Typography>
                <Typography
                  sx={{ my: 1, fontWeight: 700, fontSize: "24px !important" }}
                  variant="h6">
                  Lorem ipsum dolor sit amet
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                  ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </Typography>
              </Box>
              <Box
                xs={9}
                component="img"
                src={Img1}
                sx={{
                  height: { md: 400 },
                  display: { xs: "none", md: "block" },
                  ml: 3
                }}></Box>
            </Box>
          </Grid>
        </CContainer>
      </Box>
      <Footer />
    </>
  );
}
