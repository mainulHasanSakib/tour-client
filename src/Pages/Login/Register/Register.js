import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import banner from '../../../Images/banner.jpg'
import { useState } from 'react';
import UseAuth from '../../../Hooks/useAuth';


const Register = () => {
    const [loginData, setloginData]=useState({})
    const {user, registerUser,AuthError, isLoading}=UseAuth();
    
  const handleOnChange=e =>{
    const field=e.target.name;
    const value=e.target.value;
    const newloginData={...loginData};
    newloginData[field]=value;
    setloginData(newloginData);
    
    }
    const handleLoginSubmit=e=>{
      registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container sx={{ flexGrow: 1 }} >
        <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'dodgerblue'}} variant="h3" component="div" gutterBottom>
        REGISTER
      </Typography>
    <Grid sx={{my:5}}container spacing={2}>
  <Grid sx={{mt:5}} item xs={12} md={6}>
{!isLoading && <form  onSubmit={handleLoginSubmit}>
<TextField 
sx={{width:"75%", m:1}}
id="standard-basic" 
name='email'
onChange={handleOnChange}
label="Your Email" 
variant="standard" />
<br />

<TextField 
sx={{width:"75%", m:1 }}
id="standard-basic" 
label="Passeword"
name='password' 
onChange={handleOnChange}
type="password"
variant="standard" />
<Button
sx={{width:"75%", m:1 }}
 variant='contained'
 type="submit"
> REGISTER
</Button>
</form>}
{isLoading && <CircularProgress />}
{user?.email && <Alert severity="info">Congratulation! Account Created SuccessFully.</Alert>}
{AuthError && <Alert severity="error">{AuthError}</Alert>}
      </Grid>
  <Grid item  xs={12} md={6}>
      <img style={{width:'400px', height:'400px', borderRadius:'5px'} } src={banner} alt="" />
      </Grid>
      </Grid>
    </Container>
    );
};

export default Register;