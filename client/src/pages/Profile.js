import React from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Navbar from "../components/Navbar";
import QueueCard from "../components/QueueCard";
import CContainer from "../components/CContainer";

export default function Profile() {
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
      name: "Kabir's queue",
      owner: "Kabir",
      avgTime: 24,
      counter: "2",
      description: "This is the queue for stationary items."
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

  return (
    <>
      <Navbar></Navbar>
      <CContainer>
        <Box
          sx={{
            minWidth: "400px",
            width: "30vw",
            m: "auto ",
            mt: "-40px",
            background: "#222b45",
            p: 3,
            borderRadius: 3,
            border: "solid grey 1px"
          }}
          style={{ display: "grid", gap: "5px" }}>
          <h2 style={{ color: "white", textAlign: "center", marginTop: "-10px" }}>Your Queues</h2>

          {data.length === 0 && <Typography>You haven&apos;t created any queues yet!</Typography>}
          {data.length !== 0 &&
            data.map((queue) => {
              return <QueueCard key={queue.id} queue={queue}></QueueCard>;
            })}
        </Box>
      </CContainer>
    </>
  );
}
