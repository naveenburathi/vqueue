import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MUI Imports
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Project Imports
import Home from "./pages/Home";
import theme from "./assets/theme";
import Navbar from "./components/Navbar";
import Auth from "./pages/Auth";
import ShowQR from "./pages/ShowQR";
import ScanQR from "./pages/ScanQR";
import Queue from "./pages/Queue";
import CreateQueue from "./pages/CreateQueue";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/queue" element={<Queue />} />
          <Route path="/create-queue" element={<CreateQueue />} />
          <Route path="/show-qr" element={<ShowQR />} />
          <Route path="/join-queue" element={<ScanQR />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
