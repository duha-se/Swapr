import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  FormControl,
  Typography,
  Box,
  TextField,
  Checkbox,
  Card,
  Grid2,
  Alert,
  Snackbar,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import backgroundImg from "../../assets/loginsignupBG.jpeg";
import UsersData from "../../Json/Users";

function SignUpForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    address: "",
    mobile: "",
    dob: null,
    gender: "",
    agree: false,
  });

  const [alertMessages, setAlertMessages] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [successfulRegister, setsuccessfulRegister] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|yahoo)\.com$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setEmailError(true);
      setAlertMessages(
        "Please enter a valid email address (e.g., yourname@gmail.com)."
      );
      setOpenSnackbar(true);
      return;
    } else {
      setEmailError("");
    }
    if (!validatePassword(formData.password)) {
      setPasswordError(true);
      setAlertMessages(
        "Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers."
      );
      setOpenSnackbar(true);
      return;
    } else {
      setPasswordError("");
    }

    const newUser = {
      id: UsersData.length + 1,
      email: formData.email,
      username: formData.username,
      password: formData.password,
      address: formData.address,
      mobile: formData.mobile,
      dob: formData.dob,
      gender: formData.gender,
    };

    UsersData.push(newUser);
    setsuccessfulRegister(true);
    setAlertMessages(" User registered successfully!");
    setOpenSnackbar(true);

    console.log("Updated Users:", UsersData);

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  return (
    <Box sx={SignInContainer} direction="column">
      <Card variant="outlined" sx={CardStyle}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: 0.5,
              position: "relative",
              bottom: "1rem",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontSize: "clamp(1rem, 5vw, 2rem)",
                alignContent: "center",
              }}
            >
              SIGN UP
            </Typography>
            <Typography variant="subtitle1">We are happy to join us</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormLabel required sx={{ textAlign: "left" }}>
              Email
            </FormLabel>
            <TextField
              sx={TextFieldStyle}
              fullWidth
              required
              id="email"
              name="email"
              type="email"
              value={formData.email}
              placeholder="Enter Your Email"
              variant="outlined"
              autoComplete="email"
              onChange={handleChange}
            />
            {emailError && (
              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "bootom", horizontal: "right" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {alertMessages}
                </Alert>
              </Snackbar>
            )}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormLabel required sx={{ textAlign: "left" }}>
              Username
            </FormLabel>
            <TextField
              sx={TextFieldStyle}
              name="username"
              placeholder="Enter Your Username"
              value={formData.username}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormLabel required sx={{ textAlign: "left" }}>
              Password
            </FormLabel>
            <TextField
              sx={TextFieldStyle}
              fullWidth
              name="password"
              type="password"
              required
              variant="outlined"
              placeholder="Create Password"
              value={formData.password}
              onChange={handleChange}
              error={!!passwordError}
            />
            {passwordError && (
              <Snackbar
                open={openSnackbar}
                autoHideDuration={2000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              >
                <Alert
                  onClose={() => setOpenSnackbar(false)}
                  // severity="success"
                  severity="error"
                  sx={{ width: "100%" }}
                >
                  {alertMessages}
                </Alert>
              </Snackbar>
            )}
          </Box>

          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              right: "4rem",
            }}
          >
            <Grid2 item="true" xs={6}>
              <FormLabel required>Address</FormLabel>
              <TextField
                sx={TextFieldStyle}
                fullWidth
                name="address"
                placeholder="Enter Your Address"
                required
                value={formData.address}
                onChange={handleChange}
              />
            </Grid2>

            <Grid2 item="true" xs={6}>
              <FormLabel required>Mobile Number</FormLabel>
              <TextField
                sx={TextFieldStyle}
                fullWidth
                name="mobile"
                type="number"
                placeholder="Enter Your Mobile Number"
                required
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid2>
          </Grid2>

          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              right: "9rem",
            }}
          >
            <Grid2
              item="true"
              xs={12}
              sm={6}
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <FormLabel required>Date of Birth</FormLabel>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  value={formData.dob}
                  onChange={(newValue) =>
                    setFormData({ ...formData, dob: newValue })
                  }
                  renderInput={(params) => (
                    <TextField sx={TextFieldStyle} {...params} fullWidth />
                  )}
                />
              </LocalizationProvider>
            </Grid2>

            <Grid2 item="true" xs={6}>
              <FormControl>
                <FormLabel required>Gender</FormLabel>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid2>
          </Grid2>

          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
            }
            label="By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy."
            sx={{ width: "100%" }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              marginTop: "4px",
              backgroundColor: "#7BBF9F",
              color: "#004d40",
            }}
            fullWidth
          >
            Register
          </Button>
        </Box>
      </Card>
      {successfulRegister && (
        <Snackbar
          open={openSnackbar}
          autoHideDuration={2000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {alertMessages}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}

export default SignUpForm;

const TextFieldStyle = {
  backgroundColor: "#7BBF9F",
  borderRadius: "1rem",
  "& .MuiOutlinedInput-root": {
    borderRadius: "1rem",
  },
  "& .MuiOutlinedInput-input": {
    borderRadius: "1rem",
  },
  "&::focus": {
    backgroundColor: "#7BBF9F !important",
  },
  "&::after": {
    backgroundColor: "#7BBF9F !important",
    border: "#7BBF9F",
  },
};

const CardStyle = {
  display: "flex",
  flexDirection: "column",
  background: "transparent",
  border: "none",
  alignSelf: "center",
  gap: "2rem",
};

const SignInContainer = {
  width: "50rem",
  height: "100vh",
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  position: "relative",
  margin: "1rem 20rem",
  overflow: "hidden",
  "& .MuiTypography-root ": {
    color: "#000",
  },
  "& .MuiLink-root ": {
    color: "#000",
  },

  "& .MuiButtonBase-root": {
    color: " #000",
  },
  "& .MuiCheckbox-root": {
    color: " #000",
  },
  "& .Mui-checked": {
    color: " #000",
  },
};
