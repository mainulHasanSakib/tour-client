import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Service = ({service}) => {
    const { name, description, place, url } = service;
    return (
        <Grid  item sm={12} md={4} >
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         EVENT: {name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         PLACE:{place}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small">JOIN</Button>
      </CardActions>
    </Card>
        </Grid>
    );
};

export default Service;