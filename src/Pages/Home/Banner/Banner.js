import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import banner from '../../../Images/banner.jpg'

import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const verticle={
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    height:600,
}

const Banner = () => {
    return (
       <Container  sx={{ flexGrow: 1 }}>
           <Grid container spacing={2}>
               
        <Grid style={{...verticle, textAlign:'left', color:'dodgerBlue'}} item xs={12} md={6}>
          <Box>
          <Typography sx={{ fontWeight: 600 }} variant="h3" component="div" gutterBottom>
        Round The World <br />in 80 Days
      </Typography>
          <Typography  variant="h6" sx={{my:5}}component="div" gutterBottom>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, incidunt dolorem. In sit voluptate totam laudantium necessitatibus odio tenetur, labore voluptatem.
      </Typography>
      <Button variant="contained">Be A Surviver</Button>
          </Box>
          
          
        </Grid>
        <Grid style={verticle} item xs={12} md={6}>
          <img style={{width:'400px', height:'400px', borderRadius:'5px'} } src={banner} alt="" />
        </Grid>

       
      </Grid>

   
       </Container>
           
      
       
    );
};

export default Banner;