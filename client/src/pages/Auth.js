import React, { useState, useEffect, useRef, useContext } from "react";

// MUI Imports
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

// 3rd Party Imports
import lottie from "lottie-web";
import { useNavigate } from "react-router-dom";

// Project Imports
import authAnim from "../assets/animations/authAnim.json";
import useForm from "../hooks/useForm";
import { AppContext } from "../context";

const Auth = () => {
  const container = useRef(null);
  const [isLogin, setLogin] = useState(true);
  const [isRememberMe, setRememberMe] = useState(true);
  const [isPass, setPass] = useState(true);
  const { state, actions } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => state.isAuth && navigate("/"), [state]);

  const handleSubmit = () => {
    isLogin
      ? actions.login({ email: values.email, password: values.password })
      : actions.register({ name: values.name, email: values.email, password: values.password });
  };

  const [onSubmit, onChange, values] = useForm(handleSubmit, {
    email: "",
    password: "",
    password2: "",
    name: ""
  });

  // console.log(data, error, loaded);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: authAnim // the path to the animation json
    });

    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <Box display="flex">
      <AppBar
        sx={{ p: { xs: 3, md: "56px 40px 0 56px" }, background: "transparent" }}
        elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            position: "asbosulte",
            top: 0
          }}
          disableGutters>
          <Box component="a" href="/">
            <MenuIcon color="primary" />
          </Box>

          <Typography variant="body2" sx={{ mt: -2, mr: -2, display: { xs: "none", md: "block" } }}>
            Don&apos;t have an account?{" "}
            <Typography
              variant="body2"
              component="span"
              color="primary"
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" }
              }}
              onClick={() => setLogin(!isLogin)}>
              Get Started
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Paper
        sx={{
          borderRadius: 2,
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          justifyContent: "center",
          m: 2,
          mr: 0,
          maxWidth: "464px",
          position: "relative",
          px: 3
        }}>
        <Typography variant="h4" sx={{ fontWeight: "600", my: 10, px: 2 }}>
          {isLogin ? "Hi, Welcome Back" : "Save your time and effort by joining VirtualQ"}
        </Typography>
        <Box ref={container} />
      </Paper>
      <Container maxWidth="sm" sx={{ px: 2 }}>
        <Box
          maxWidth={480}
          minHeight={"100vh"}
          py={12}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          m={"auto"}>
          <Box mb={5}>
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: 700, mb: 1 }}>
              {isLogin ? "Sign in to VirtualQ" : "Get started absolutely free."}
            </Typography>
            <Typography variant="body1">
              {isLogin ? "Enter your details below." : "Free forever. No credit card needed."}
            </Typography>
          </Box>
          <Box component="form" maxWidth={480} onSubmit={onSubmit}>
            {!isLogin && (
              <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-name"
                  name="name"
                  value={values.name}
                  onChange={onChange}
                  label="Name"
                  sx={{ borderRadius: 2 }}
                />
              </FormControl>
            )}
            <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-email">Email address</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email"
                type={"email"}
                name="email"
                value={values.email}
                onChange={onChange}
                label="Email address"
                sx={{ borderRadius: 2 }}
              />
            </FormControl>
            <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={!isPass ? "text" : "password"}
                value={values.password}
                name="password"
                onChange={onChange}
                sx={{ borderRadius: 2 }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setPass((state) => !state)}
                      onMouseDown={() => setPass((state) => !state)}
                      edge="end">
                      {isPass ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            {!isLogin && (
              <FormControl sx={{ my: 1 }} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password2">Confirm password</InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password2"
                  type={!isPass ? "text" : "password"}
                  value={values.password2}
                  name="password2"
                  onChange={onChange}
                  sx={{ borderRadius: 2 }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setPass((state) => !state)}
                        onMouseDown={() => setPass((state) => !state)}
                        edge="end">
                        {isPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Confirm password"
                />
              </FormControl>
            )}
            {isLogin && (
              <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
                <FormControlLabel
                  sx={{ mt: 2 }}
                  control={
                    <Checkbox
                      name="isRememberMe"
                      checked={isRememberMe}
                      onChange={() => setRememberMe(!isRememberMe)}
                    />
                  }
                  label="Remembe me"
                  color="primary"
                />
                <Typography
                  component="a"
                  href="/auth/reset-password"
                  variant="body2"
                  color="primary"
                  sx={{ "&:hover": { textDecoration: "underline" } }}>
                  Forgot password?
                </Typography>
              </Box>
            )}
            <Button
              variant="contained"
              sx={{ borderRadius: 2, mt: 2 }}
              fullWidth
              size="large"
              type="submit">
              Login
            </Button>
          </Box>
          <Typography
            variant="body2"
            sx={{ mt: 3, display: { xs: "block", md: "none" } }}
            align="center">
            Don&apos;t have an account?{" "}
            <Typography
              variant="body2"
              component="span"
              color="primary"
              sx={{
                cursor: "pointer",
                fontWeight: 600,
                "&:hover": { textDecoration: "underline" }
              }}
              onClick={() => setLogin(!isLogin)}>
              Get Started
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Auth;
