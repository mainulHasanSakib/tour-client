import React from 'react';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import BG from '../../../Images/BG.jpg'
const bannerBg={
  background: `url(${BG})`,
  backgroundSize:'cover',
  
  
  
}
const About = () => {
    return (
     
        <Container   style={bannerBg} sx={{ flexGrow: 1, borderRadius: "5px" }}>
             <Typography sx={{textAlign:'center', my:5, fontWeight: 600, color:'whitesmoke'}} variant="h3" component="div" gutterBottom>
        ABOUT US
      </Typography>
      <Grid sx={{my:5, py:5}} container spacing={2}>
               
               <Grid style={{ textAlign:'justify', color:'dodgerBlue'}} item xs={12} md={5}>
                 
               <Typography sx={{ fontWeight: 600, color:'dodgerBlue' }} variant="h5" component="div" gutterBottom>
        How We Run
      </Typography>
      <Typography  variant="h6" sx={{my:3, color:'dodgerBlue'}}component="div" gutterBottom>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestias provident tenetur sequi sunt, eos consequatur ex officiis vero iste debitis laboriosam, magnam maiores tempore, quis error soluta ut voluptatem minima corporis ducimus perferendis ab pariatur porro. Dolorem et saepe, earum repellendus, minima maiores soluta autem, facere asperiores omnis repellat.
      </Typography>
                 
               </Grid>
               <Grid  sx={{display:'flex', alignItems:'center'}} item  md={7} >
               <Grid container spacing={2}>
                  <Grid  item sm={12} md={6} >
                  <Paper style={{backgroundColor:'dodgerBlue',height:150}} variant="outlined" >
                  <Typography sx={{ fontWeight: 600, color:'whitesmoke', m:3}} variant="h5" component="div" gutterBottom>
                 24/7 Hour Location Tracking and GPS Support
      </Typography>    
                  </Paper>
                  </Grid>
                  <Grid  item sm={12} md={6} >
                  <Paper style={{backgroundColor:'dodgerBlue',height:150}} variant="outlined" >
                  <Typography sx={{ fontWeight: 600, color:'white' , m:3}} variant="h5" component="div" gutterBottom>
                 24/7 Hour Emergency Air Ambulence Help 
      </Typography>    
                  </Paper>
                  </Grid>
                  <Grid  item sm={12} md={6} >
                  <Paper style={{backgroundColor:'dodgerBlue',height:150}} variant="outlined" >
                  <Typography sx={{ fontWeight: 600, color:'white' , m:3}} variant="h5" component="div" gutterBottom>
                 24/7 Hour Rescue Team and Medical Support 
      </Typography>    
                  </Paper>
                  </Grid>
                  <Grid item sm={12} md={6} >
                  <Paper style={{backgroundColor:'dodgerBlue',height:150}} variant="outlined" >
                  <Typography sx={{ fontWeight: 600, color:'white', m:3 }} variant="h5" component="div" gutterBottom>
                  365 Days Survival Training and Kit Support
      </Typography>    
                  </Paper>
                  </Grid>
               
                   </Grid>  
               
               </Grid>
       
              
             </Grid>
        </Container>
            
       
    );
};

export default About;