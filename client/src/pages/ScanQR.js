import React, { useState, useContext, useEffect, useRef } from "react";

// MUI imports
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// #3rd Party
import PropTypes from "prop-types";
import QrReader from "react-qr-reader";
import lottie from "lottie-web";
import scan from "../assets/animations/scan.json";

// Project Imports
import { AppContext } from "../context";
import CContainer from "../components/CContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ScanQR = () => {
  const [start, setStart] = useState(false);
  const [data, setData] = useState(null);
  const [isScanCompleted, setScanCompleted] = useState(false);
  const [camera, setCamera] = useState("environment");
  const container = useRef(null);

  const handleError = (err) => {
    console.error(err);
  };

  const handleScan = async (scanData) => {
    console.log(`loaded data data`, scanData);
    if (scanData) {
      setScanCompleted(true);
      setData(JSON.parse(scanData));
    }
  };

  const startScanning = () => {
    setStart((state) => !state);
    // setTimeout(() => {
    //   setStart(false);
    // }, 60 * 1000);
  };

  useEffect(() => {
    const anim1 = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: scan
    });

    return () => {
      anim1.destroy();
    };
  }, []);

  useEffect(() => {
    if (container.current) container.current.firstChild.style.left = "-10px";
  }, [container]);

  console.log(container.current?.firstChild);

  return (
    <>
      <Navbar />
      <Box>
        <CContainer sx={{ textAlign: "center" }}>
          <Typography variant="h3" color="text" sx={{ mb: 3 }}>
            Scan your QR Code to join in queue
          </Typography>
          <FormControl sx={{ mb: 2, minWidth: 120 }} size="small">
            <Select
              labelId="select-camera"
              id="select-camera"
              value={camera}
              onChange={(e) => setCamera(e.target.value)}>
              <MenuItem value={"environment"}>Back Camera</MenuItem>
              <MenuItem value={"user"}>Front Camera</MenuItem>
            </Select>
          </FormControl>
          <Box display="flex" align="center" justifyContent="center">
            <Box
              ref={container}
              width="300px"
              position="relative"
              overflow="hidden"
              sx={{
                "& > svg": {
                  position: "relative",
                  zIndex: 10
                }
              }}>
              {start && !isScanCompleted && (
                <QrReader
                  facingMode={camera}
                  delay={500}
                  onError={handleError}
                  onScan={handleScan}
                  style={{
                    width: "100%",
                    heigth: "100%",
                    margin: "0 auto",
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)"
                  }}
                />
              )}
            </Box>
          </Box>
          {data && (
            <Box>
              <Typography variant="h5">Queue Name: {data.name}</Typography>
              <Typography variant="body2">Queue Description: {data.desc}</Typography>
            </Box>
          )}
          <Button disabled={start} variant="contained" sx={{ mt: 3 }} onClick={startScanning}>
            Start Scanning
          </Button>
        </CContainer>
      </Box>
      <Divider />
      <Box sx={{ background: "#1A2138" }}>
        <Footer />
      </Box>
    </>
  );
};

export default ScanQR;
