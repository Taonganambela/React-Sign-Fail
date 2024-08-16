import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CheckIcon from "@mui/icons-material/Check";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios'; // Import Axios
import aaa from '/src/assets/aaa.png';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';

const defaultTheme = createTheme();

function Login() {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); 
  const handleSubmit = async (event:any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      gn: data.get('gn'),
      password: data.get('password'),
    };
    
    try {
      const response = await axios.post(`url`, formData);
      console.log(response.data); 
      navigate('/dashboard');
      setSuccess("Data submited Succesfully");
      // Close the success message after 3 seconds
      setTimeout(() => {
        setSuccess("");
      }, 3000);

      } catch (error) {
      console.error('Error sending data to backend:', error);
      setError("Error sending data to backend");
      // Close the success message after 3 seconds
      setTimeout(() => {
        setError("");
      }, 3000);

    }
  };

  const [formData, setFormData] = useState({
		gn : "",
		password: "",
  });



  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${aaa})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

        {success && (
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
          {success}
        </Alert>
      )}
      {error && <Alert severity="error">{error}</Alert>}

          <Box
            sx={{
              my: 16,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#9333EA',
                },
                '&:hover fieldset': {
                  borderColor: '#9333EA',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#9333EA',
                },
              },
            }}
          >
            <Typography component="h1" variant="h5">
              Welcome Back
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="gn"
                label="GN"
                name="gn"
                value={formData.gn}
								onChange={(e) => {
									const newObj = {
										...formData,
										gn: e.target.value,
									};
									setFormData(newObj);
								}}
                autoComplete="current-password"
                autoFocus
                InputLabelProps={{
                  style: { color: 'black' }
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                value={formData.password}
								onChange={(e) => {
									const newObj = {
										...formData,
										P: e.target.value,
									};
									setFormData(newObj);
								}}
                autoFocus
                InputLabelProps={{
                  style: { color: 'black' }
                }}
                type="password"
                id="password"
                autoComplete="current-password"
               
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, color: 'white', backgroundColor: '#9333EA' }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default Login;
