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
import Img2 from "../assets/illustrations/step2.png";
import Img3 from "../assets/illustrations/step3.png";
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
                <HeadLine>
                  <HeadLine component="span" color="primary">
                    VQ{" "}
                  </HeadLine>
                  is the new age Queue
                </HeadLine>
              </Box>
              <Box mb={3}>
                <Typography variant="h6">
                  In the new age of technology, conventional queues are not the perfect choice.
                  Whether it&apos;s standing in a queue or organinsing a queue, VQ helps you in
                  both. <br />
                  <br />
                  So let &apos;s say goodbye to the conventional queues by joining VQ.
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
                  href="/JoinQueue"
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
                  Join VQ platform
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  The first step in your journey to virtual queues is to join VQ platform. It&apos;s
                  totally free of cost and we don&apos; ask for any card details or your any other
                  personal information.
                </Typography>
              </Box>
              <Box
                xs={9}
                component="img"
                src={Img1}
                sx={{
                  height: { md: 350 },
                  display: { xs: "none", md: "block" },
                  ml: 3
                }}></Box>
            </Box>
            <Box
              sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <Box
                xs={9}
                component="img"
                src={Img2}
                sx={{
                  height: { md: 350 },
                  display: { xs: "none", md: "block" },
                  mr: 3
                }}></Box>
              <Box sx={{ textAlign: "right" }}>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Step 2
                </Typography>
                <Typography
                  sx={{ my: 1, fontWeight: 700, fontSize: "24px !important" }}
                  variant="h6">
                  Join existing queue
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  Next step is to join a queue. Joining a queue can be done by scanning the QR of
                  the queue or just by searching it on the VQ platform. VQ will let you know about
                  the expected time you have to wait for your turn.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ mt: 4, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
              <Box>
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Step 3
                </Typography>
                <Typography
                  sx={{ my: 1, fontWeight: 700, fontSize: "24px !important" }}
                  variant="h6">
                  Sit back and relax
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "18px" }}>
                  That&apos;s it. Now you have got into the queue without standing in the real
                  queue. Now you got the waiting time. You can visit only when it&apos;s your turn
                  at your own comfort.
                </Typography>
              </Box>
              <Box
                xs={9}
                component="img"
                src={Img3}
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
