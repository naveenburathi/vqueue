import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
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
      description: "This is the queue for stationary items.flakjj alksjlaksflas fasljks f"
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
        <h2 style={{ color: "white", textAlign: "center", marginTop: "-10px" }}>Your Queues</h2>
        <Box
          sx={{
            minWidth: "400px",
            m: "auto ",
            mt: "-40px",
            background: "#222b45",
            p: 3,
            borderRadius: 3,
            border: "solid grey 1px"
          }}>
          {data.length === 0 && <Typography>You haven&apos;t created any queues yet!</Typography>}
          <Grid container spacing={3} sx={{ gridAutoRows: "1000px", mt: "10px" }}>
            {data.length !== 0 &&
              data.map((queue) => {
                return (
                  <Grid item key={2} xs={12} sm={6} md={4}>
                    <QueueCard key={queue.id} queue={queue}></QueueCard>
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </CContainer>
    </>
  );
}
