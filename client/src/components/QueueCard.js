import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export default function QueueCard({ queue }) {
  const { name, avgTime, owner, description, counter } = queue;

  QueueCard.propTypes = {
    queue: PropTypes.node.isRequired
  };

  return (
    <>
      <Card sx={{ minWidth: 275, height: "100%" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {`Counter No: ${counter == -1 ? "Not Available" : counter}`}
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography variant="h5" component="div">
                {name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button size="small" variant="contained">
                View Queue
              </Button>
            </Grid>
          </Grid>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {`Owner: ${owner}`}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </>
  );
}
