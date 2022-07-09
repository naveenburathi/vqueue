import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import CContainer from "../components/CContainer";
import Navbar from "../components/Navbar";
import QueueCard from "../components/QueueCard";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function joinqueue() {
  const [val, setVal] = useState("");
  const [isSearch, setIsSearch] = useState(0);
  const [searchedItems, setSearchedItems] = useState([]);
  const [isScanned, setIsScanned] = useState(0);

  const data = [
    {
      id: 1,
      name: "Naveen's queue",
      owner: "Naveen",
      avgTime: 20,
      counter: "-1",
      description: "This is the queue for grocery items."
    },
    {
      id: 2,
      name: "Kabir",
      owner: "Kabir",
      avgTime: 24,
      counter: "2",
      description: "This is the queue for stationary items.dfss sd fs dff askdjhf akjsd fsakjd  "
    },
    {
      id: 3,
      name: "Shubham's queue",
      owner: "Shubham",
      avgTime: 19,
      counter: "1",
      description: "This is the queue of ATM."
    }
  ];

  function onSearch(e) {
    console.log(val);
    setIsSearch(1);

    // for (let i = 0; i < data.length; i++) {}
    setSearchedItems(data);
    setVal("");
  }
  function onChange(e) {
    setVal(e.target.value);
    // console.log(e);
  }

  function enterPressed(event) {
    var code = event.keyCode || event.which;
    if (code === 13) {
      console.log(val);
      setIsSearch(1);

      // for (let i = 0; i < data.length; i++) {}
      setSearchedItems(data);
      setVal("");
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <CContainer>
        <Box
          sx={{
            minWidth: "400px",
            width: "30vw",
            m: "auto ",
            background: "#222b45",
            p: 3,
            borderRadius: 3,
            border: "solid grey 1px"
          }}
          style={{ display: "grid", gap: "5px" }}>
          <h2 style={{ color: "white", textAlign: "center", marginTop: "-10px" }}>Join a Queue</h2>
          {isScanned == 0 && (
            <>
              <Search component="submit" onSubmit={onSearch}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  value={val}
                  onChange={onChange}
                  placeholder="Search your queue..."
                  onKeyPress={enterPressed}
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              {isSearch == 0 && (
                <>
                  <Typography style={{ textAlign: "center" }}>OR</Typography>
                  <Box
                    style={{
                      width: "150px",
                      height: "150px",
                      background: "white",
                      color: "black",
                      margin: "auto"
                    }}>
                    Scanner
                  </Box>
                  <Typography sx={{ m: "auto", color: "white" }}>SCAN QR CODE OF QUEUE</Typography>
                </>
              )}

              {isSearch == 1 && (
                <>
                  <Typography>Searched results...</Typography>
                  {data.map((queue) => {
                    return <QueueCard key={queue.id} queue={queue}></QueueCard>;
                  })}
                  <Typography style={{ textAlign: "center" }}>OR</Typography>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      setIsSearch(0);
                      setSearchedItems([]);
                    }}>
                    Scan QR Code
                  </Button>
                </>
              )}
            </>
          )}
          {isScanned == 1 && (
            <>
              <Typography>Scanned Queue...</Typography>
              <QueueCard queue={data[0]}></QueueCard>
              <Button
                variant="outlined"
                onClick={() => {
                  setIsScanned(0);
                }}>
                Cancel
              </Button>
            </>
          )}
        </Box>
      </CContainer>
    </>
  );
}
