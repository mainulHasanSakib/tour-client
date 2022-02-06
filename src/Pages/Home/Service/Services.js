import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import Service from './Service';
const Services = () => {
    const[services, setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    },[])
    return (
        <Container  sx={{ flexGrow: 1 }}>
            <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'dodgerblue'}} variant="h3" component="div" gutterBottom>
      OUR EVENT
      </Typography>
      <Grid sx={{my:5, py:5}} container spacing={2}>
      
{
    services.map(service=><Service 
         key={service._id}
                  service={service}>
    </Service>
    )
}
     
      </Grid>
        </Container>
    );
};

export default Services;