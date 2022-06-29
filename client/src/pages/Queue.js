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
      <Box>
        <Grid container spacing={6} sx={{ p: 2 }}>
          <Grid
            ref={container}
            xs={12}
            sm={6}
            sx={{ height: "100vh", display: { xs: "none", sm: "block" } }}></Grid>
          <Grid item sx={{ margin: "auto" }} direction="column" xs={12} sm={6}>
            {" "}
            <Box data-aos="fade-right">
              <Box mb={2} sx={{ mt: { md: -10 } }}>
                <HeadLine>Lorem ipsum dolor sit amet</HeadLine>
              </Box>
              <Box mb={3}>
                <Typography variant="h6" sx={{ color: "#aeb0b4" }}>
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                  ametLorem ipsum dolor sit ametbr <br />
                  <br /> Lorem ipsum dolor sit ametLorem ipsum dolor
                </Typography>
              </Box>
              <Box sx={{ display: "grid" }}>
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    fontSize: { xs: 15, md: 20 },
                    width: { xs: "100%" },
                    m: { xs: "auto", md: "0" }
                  }}
                  href="./CreateQueue">
                  Create Queue
                </Button>
                <br />
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    fontSize: { xs: 15, md: 20 },
                    width: { xs: "100%" },
                    m: { xs: "auto", md: "0" }
                  }}>
                  Join Queue
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ pr: 10, pl: 10, pt: 5, background: "#222B45" }}>
        <HeadLine style={{ textAlign: "center" }}>How It Works</HeadLine>
        <Grid container direction="column">
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ color: "#aeb0b4" }} xs={3}>
              <h1>Step 1:</h1>
              <h3>Lorem ipsum dolor sit amet</h3>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
              ipsum dolor sit ametLorem ipsum dolor sit amet
            </Typography>
            <Box
              xs={9}
              component="img"
              src={Img1}
              sx={{
                height: { xs: 333, md: 400 },
                display: { xs: "none", sm: "block" }
              }}></Box>
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Box
              xs={9}
              component="img"
              src={Img1}
              sx={{
                height: { xs: 333, md: 400 },
                display: { xs: "none", sm: "block" }
              }}></Box>
            <Typography
              variant="h6"
              sx={{ color: "#aeb0b4" }}
              xs={3}
              style={{ textAlign: "right" }}>
              <h1>Step 2:</h1>
              <h3>Lorem ipsum dolor sit amet</h3>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
              ipsum dolor sit ametLorem ipsum dolor sit amet
            </Typography>
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ color: "#aeb0b4" }} xs={3}>
              <h1>Step 3:</h1>
              <h3>Lorem ipsum dolor sit amet</h3>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
              ipsum dolor sit ametLorem ipsum dolor sit amet
            </Typography>
            <Box
              xs={9}
              component="img"
              src={Img1}
              sx={{
                height: { xs: 333, md: 400 },
                display: { xs: "none", sm: "block" }
              }}></Box>
          </Box>
          <Box sx={{ mt: 4, display: "flex", alignItems: "center" }}>
            <Box
              xs={9}
              component="img"
              src={Img1}
              sx={{
                height: { xs: 333, md: 400 },
                display: { xs: "none", sm: "block" }
              }}></Box>
            <Typography
              variant="h6"
              sx={{ color: "#aeb0b4" }}
              xs={3}
              style={{ textAlign: "right" }}>
              <h1>Step 4:</h1>
              <h3>Lorem ipsum dolor sit amet</h3>
              Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
              ipsum dolor sit ametLorem ipsum dolor sit amet
            </Typography>
          </Box>
        </Grid>
      </Box>
      <Footer></Footer>
    </>
  );
}
