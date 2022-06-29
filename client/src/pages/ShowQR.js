import React, { useContext } from "react";

// MUI imports
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// #3rd Party
import PropTypes from "prop-types";
import QRCode from "qrcode.react";

// Project Imports
import { AppContext } from "../context";
import CContainer from "../components/CContainer";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShowQR = () => {
  const { state, actions } = useContext(AppContext);
  const qrVal = JSON.stringify(state.queue || {});

  const downloadQRCode = () => {
    // Generate download with use canvas and stream
    const canvas = document.getElementById("qr-gen");
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${state.queue.name || "New QR Code"}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <Navbar />
      <Box>
        <CContainer sx={{ textAlign: "center" }}>
          <Typography variant="h3" color="text" sx={{ mb: 3 }}>
            Queue is created succesfully!
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mb: 3 }}>
            Share this QR Code to join in the queue
          </Typography>
          <Box>
            <QRCode id="qr-gen" value={qrVal} size={290} level={"H"} includeMargin={true} />
          </Box>
          <Button variant="contained" sx={{ mt: 1 }} onClick={downloadQRCode}>
            Download QR Code
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

ShowQR.propTypes = {
  children: PropTypes.node.isRequired
};

export default ShowQR;
