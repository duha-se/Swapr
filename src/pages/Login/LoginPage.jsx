import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Link,
  Typography,
  Stack,
  styled,
  Alert,
  Snackbar,
  TextField,
} from "@mui/material";
import FormControl from "@mui/material/FormControl";

import backgroungImg from "../../assets/loginsignupBG.jpeg";
import MuiCard from "@mui/material/Card";
import UsersData from "../../Json/Users";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: "transparent",
  border: "none",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "450px",
  },
}));

const SignInContainer = styled(Stack)({
  height: "40rem",
  width: "50rem",
  backgroundImage: `url(${backgroungImg})`,
  backgroundRepeat: "no-repeat",
  flexWrap: "wrap",
  position: "relative",
  top: "2rem",
  left: "18rem",
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
  "& ..Mui-checked": {
    color: " #000",
  },
});

const TextFieldStyle = styled(TextField)({
  backgroundColor: "#7BBF9F ",
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
});

const LoginButtonStyle = styled(Button)({
  backgroundColor: "#7BBF9F",
  borderRadius: "1rem",
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const user = UsersData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      navigate("/home");
    } else {
      setOpenSnackbar(true);
      setLoginError("Invalid email or password. Please try again.");
    }
  };

  return (
    <>
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontSize: "clamp(2rem, 10vw, 2.15rem)",
                alignContent: "center",
              }}
            >
              WELCOME
            </Typography>
            <Typography
              component="h3"
              variant="subtitle1"
              sx={{ alignContent: "center" }}
            >
              We are happy to see you again.
            </Typography>
          </Box>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email" required>
                Email
              </FormLabel>
              <TextFieldStyle
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="your@email.com"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color="#255b4e"
                sx={{ ariaLabel: "email" }}
              />
            </FormControl>
            <FormControl>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormLabel htmlFor="password" required>
                  Password
                </FormLabel>
              </Box>

              <TextFieldStyle
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color="#255b4e"
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {loginError && (
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
                  {loginError}
                </Alert>
              </Snackbar>
            )}
            <LoginButtonStyle type="submit" fullWidth variant="contained">
              Login
            </LoginButtonStyle>
            <Typography sx={{ textAlign: "center" }}>
              Don&apos;t have an account?{" "}
              <span>
                <Link
                  href="/signup"
                  variant="body2"
                  sx={{ alignSelf: "center" }}
                >
                  Sign up
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </SignInContainer>
    </>
  );
};
export default LoginPage;
