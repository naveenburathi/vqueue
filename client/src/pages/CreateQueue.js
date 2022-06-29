import React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";

import Navbar from "../components/Navbar";
import Img from "../assets/illustrations/queue.png";
import CContainer from "../components/CContainer";
import useForm from "../hooks/useForm";

export default function CreateQueue() {
  const handleSubmit = () => {
    console.log({ ...values });
  };
  const [onSubmit, onChange, values] = useForm(handleSubmit, {
    name: "",
    counter: "",
    averageTime: "",
    purpose: "",
    description: ""
  });

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
          style={{ display: "grid", gap: "5px" }}
          component="form"
          onSubmit={onSubmit}>
          <h2 style={{ color: "white", textAlign: "center", marginTop: "-10px" }}>
            Create Your Queue
          </h2>
          <FormControl size="small" sx={{ my: 1 }} fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-name"
              name="name"
              value={values.name}
              onChange={onChange}
              label="Name"
            />
          </FormControl>
          {/* <FormControl size="small" sx={{ my: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-counter">Counter Number</InputLabel>
          <OutlinedInput
            id="outlined-adornment-counter"
            name="counter"
            value={values.counter}
            onChange={onChange}
            label="Counter Number"
            sx={{ borderRadius: 2 }}
          />
        </FormControl> */}
          <FormControl
            size="small"
            sx={{ my: 1 }}
            fullWidth
            variant="outlined"
            defaultValue="Small">
            <InputLabel htmlFor="outlined-adornment-averageTime">Average Time</InputLabel>
            <OutlinedInput
              id="outlined-adornment-averageTime"
              name="averageTime"
              value={values.averageTime}
              onChange={onChange}
              type="number"
              inputProps={{ min: 1 }}
              label="Average Time"
              endAdornment={<InputAdornment position="end">secs</InputAdornment>}
              sx={{ borderRadius: 2 }}
            />
            <FormHelperText id="outlined-adornment-averageTime">
              The average time required for a single user.
            </FormHelperText>
          </FormControl>
          {/* <FormControl size="small" sx={{ my: 1 }} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-purpose">Purpose</InputLabel>
          <OutlinedInput
            id="outlined-adornment-purpose"
            name="purpose"
            value={values.purpose}
            onChange={onChange}
            label="Purpose"
            sx={{ borderRadius: 2 }}
          /> */}
          {/* </FormControl> */}
          <FormControl size="small" sx={{ my: 1 }} fullWidth variant="outlined">
            {/* <InputLabel htmlFor="outlined-adornment-description">Description</InputLabel> */}
            <TextField
              id="outlined-adornment-description"
              name="description"
              value={values.description}
              onChange={onChange}
              label="Description"
              multiline
              rows={3}
              placeholder="Describe your purpose of queue..."
              sx={{ borderRadius: 2 }}
            />
          </FormControl>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </CContainer>
    </>
  );
}
