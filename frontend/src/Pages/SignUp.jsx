import './SignUp.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { axiosPrivate } from '@/services/apiClient';
import { useNavigate } from 'react-router-dom';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axiosPrivate.post('/auth/register', data);
      console.log('Registration successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('Failed to register. Please try again.');
    }
  };

  return (
    <>
      <div id="bgcolor">
        <CssBaseline enableColorScheme />
        <SignInContainer direction="column" justifyContent="space-between">
          <Card variant="outlined">
            <Typography
              component="h1"
              variant="h4"
              sx={{
                width: '100%',
                fontSize: 'clamp(2rem, 10vw, 2.15rem)',
                fontWeight: 'bold',
                textAlign: 'center',
                padding: '20px',
              }}
            >
              Sign Up
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                gap: 2,
              }}
            >
              <FormControl>
                <FormLabel>Username</FormLabel>
                <TextField
                  id="username"
                  type="text"
                  placeholder="username"
                  variant="outlined"
                  {...register('username')}
                  sx={{ width: '100%' }}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <TextField
                  id="password"
                  type="password"
                  placeholder="••••••••••"
                  fullWidth
                  variant="outlined"
                  {...register('password')}
                />
              </FormControl>
              <Button type="submit" fullWidth variant="contained" id="fillgreen">
                Sign up
              </Button>
            </Box>
          </Card>
        </SignInContainer>
      </div>
    </>
  );
}

export default SignUp;