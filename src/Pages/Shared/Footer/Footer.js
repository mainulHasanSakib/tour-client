import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
const Footer = () => {
    return (
        <Container sx={{backgroundColor:'dodgerBlue', borderRadius: "5px"}}maxWidth="lg">
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
            <Typography sx={{textAlign:'left', my:5, fontWeight: 600, color:'whitesmoke'}} variant="h5" component="div" gutterBottom>
        THE WORLD SURVIVER
      </Typography>
            <Typography sx={{textAlign:'left',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni <br /> placeat id dolore quasi perferendis doloribus.
      </Typography>
        </Grid>
            <Grid item xs={12} md={6}>
            <Typography sx={{textAlign:'center', mt:5, fontWeight: 500, color:'whitesmoke'}} variant="h5" component="div" gutterBottom>
            CONTACT US
      </Typography>
            <Typography sx={{textAlign:'center',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
           We Are Available in 24/7/365
      </Typography>
            <Typography sx={{textAlign:'center',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
           Phone: +880 1812345678
      </Typography>
            <Typography sx={{textAlign:'center',  fontWeight: 300, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
          Email: worldsurviver@gmail.com
      </Typography>
        </Grid>
            </Grid>
            <Grid sx={{justifyContent:'center'}} container spacing={2}>
            <Typography sx={{textAlign:'center', mt:5, fontWeight: 400, color:'whitesmoke'}} variant="h6" component="div" gutterBottom>
            ©Developed By: Mainul Hasan Sakib || 2022-23
      </Typography>
                </Grid>
        </Container>
    );
};

export default Footer;