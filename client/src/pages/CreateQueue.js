import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

// MUI Imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";

// Project Imports
import Navbar from "../components/Navbar";
import CContainer from "../components/CContainer";
import useForm from "../hooks/useForm";
import { AppContext } from "../context";
import ShowQR from "./ShowQR";

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

const CreateQueue = () => {
  const { state, actions } = useContext(AppContext);
  // const [queueData, setQueueData] = useState();

  const handleSubmit = () => {
    console.log({ ...values });
    actions.createQueue(values);
    // if (state.isQueueCreated) setQueueData(state.queue);
  };
  const [onSubmit, onChange, values] = useForm(handleSubmit, {
    name: "",
    avgTime: "",
    desc: ""
  });

  return (
    <>
      <Navbar />
      {state.isQueueCreated ? (
        <ShowQR queue={state.queue} />
      ) : (
        <CContainer
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: `calc(100vh - 64px)`
          }}>
          <Card
            sx={{
              p: "5ch 4ch",
              borderRadius: 3,
              // display: "grid",
              // gap: "5px",
              maxWidth: "500px"
            }}
            component="form"
            onSubmit={onSubmit}>
            <h2 style={{ color: "white", textAlign: "center", marginTop: "-10px" }}>
              Create Your Queue
            </h2>
            <FormControl size="small" sx={{ my: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-name">Queue Name</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name"
                name="name"
                value={values.name}
                onChange={onChange}
                label="Queue Name"
              />
            </FormControl>
            <FormControl
              size="small"
              sx={{ my: 2 }}
              fullWidth
              variant="outlined"
              defaultValue="Small">
              <InputLabel htmlFor="outlined-adornment-avgTime">Average Time</InputLabel>
              <OutlinedInput
                id="outlined-adornment-avgTime"
                name="avgTime"
                value={values.avgTime}
                onChange={onChange}
                type="number"
                inputProps={{ min: 1 }}
                label="Average Time"
                placeholder="Enter average time for a single user"
                endAdornment={<InputAdornment position="end">secs</InputAdornment>}
                sx={{ borderRadius: 2 }}
              />
            </FormControl>
            <FormControl size="small" sx={{ my: 2 }} fullWidth variant="outlined">
              <TextField
                name="desc"
                value={values.dsec}
                onChange={onChange}
                label="Description"
                multiline
                rows={3}
                placeholder="Describe your purpose of queue..."
                sx={{ borderRadius: 2 }}
              />
            </FormControl>
            <Button fullWidth type="submit" variant="contained">
              Submit
            </Button>
          </Card>
        </CContainer>
      )}
    </>
  );
};

export default CreateQueue;
