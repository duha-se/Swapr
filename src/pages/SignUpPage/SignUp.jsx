import React, { useState } from 'react';
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
   Grid2,
  Checkbox,
  styled,
  
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import backgroundImg from "../../assets/loginsignupBG.jpeg";
import UsersData from "../../Json/Users";


function SignUpForm() {

  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    address: '',
    mobile: '',
    dob: null,
    gender: '',
    agree: false
  });

     
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
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
      setEmailError('Please enter a valid email address (e.g., yourname@gmail.com).');
      return;
    } else {
      setEmailError('');
    }
    if (!validatePassword(formData.password)) {
      setPasswordError(
        'Password must be at least 8 characters long and contain uppercase, lowercase letters, and numbers.'
      );
      return;
    } else {
      setPasswordError('');
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

    console.log('Updated Users:', UsersData);
    alert('User registered successfully!');
  
  };
 
  const TextFieldStyle = styled(TextField)({
    backgroundColor: "#7BBF9F",
    borderRadius: "1rem",
    "& .MuiOutlinedInput-root": {
      borderRadius: "1rem",
    },
  });

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1.5,
        p: 5,
        backgroundImage: `url(${backgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100vh',
        }}>
      <Typography component="h1" variant="h4" sx={{ fontSize: 'clamp(1rem, 5vw, 2rem)' }}>
        SIGN UP
      </Typography>
      <Typography variant="subtitle1">We are happy to join us</Typography>

      <Box sx={{ width: '60%' }}>
        <FormLabel sx={{ textAlign: 'left' }}>Email</FormLabel>
        <TextFieldStyle
          fullWidth
          name="email"
          type="email"
          placeholder="Enter Your Email"
          autoComplete="email"
          variant="outlined"
          required
          value={formData.email}
          inputProps={{ maxLength: 50 }}
          onChange={handleChange}
          error={!!emailError}
          helperText={emailError}
        />
      </Box>

      <Box sx={{ width: '60%' }}>
        <FormLabel sx={{ textAlign: 'left' }}>Username</FormLabel>
        <TextFieldStyle
          name="username"
          placeholder="Enter Your User Name"
          value={formData.username}
          onChange={handleChange}
          required
          fullWidth
          variant="outlined"

        />
      </Box>

      <Box sx={{ width: '60%' }}>
        <FormLabel sx={{ textAlign: 'left' }}>Password</FormLabel>
        <TextFieldStyle
          fullWidth
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"      
          required
          variant="outlined"
          color="#255b4e"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
          error={!!passwordError}
          helperText={passwordError}
        />
      </Box>

     
      <Grid2 container spacing={3} sx={{ width: '60%' }}>
        <Grid2 item xs={12} sm={6}>
          <FormLabel>Address</FormLabel>
          <TextFieldStyle
            fullWidth
            name="address"
            placeholder="Enter Your Address"
          
            required
            value={formData.address}
            onChange={handleChange}
          />
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <FormLabel>Mobile Number</FormLabel>
          <TextFieldStyle
            fullWidth
            name="mobile"
            placeholder="Enter Your Mobile Number"
            required
            value={formData.mobile}
            onChange={handleChange
            
            }
          />
        </Grid2>
      </Grid2>

      
      <Grid2 container spacing={2} sx={{ width: '60%' }}>
        <Grid2 i item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FormLabel sx={{ marginBottom: '4px' }}>Date of Birth</FormLabel>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={formData.dob}
              onChange={(newValue) => setFormData({ ...formData, dob: newValue })}
              renderInput={(params) => <TextFieldStyle {...params} fullWidth />}
            />
          </LocalizationProvider>
        </Grid2>
        <Grid2 item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel>Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="Female" control={<Radio />} label="Female" />
              <FormControlLabel value="Male" control={<Radio />} label="Male" />
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
        label={
          <Typography variant="body2">
            By signing up, you agree to our Terms Privacy Policy, and Cookies Policy.
          </Typography>
        }
        sx={{ width: '60%' }}
        
      />

     
      <Button
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        sx={{
          mt: 2,
          backgroundColor: '#7BBF9F',
          color: '#004d40',
          width: '60%', 
        }}
      >
        Register
      </Button>
    </Box>
  );
}

export default SignUpForm
