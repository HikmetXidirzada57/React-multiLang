import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductItem() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image="https://kontakt.az/resize/display?url=https%3A%2F%2Fkontakt.az%2Fresize%2Fdisplay%2Fresize%2F585x525%2Fwhite.png%3Fop%3Dop%3Aflat%2Bpath%3Amedia%2Fcatalog%2Fproduct%2F5%2F3%2F530303-Product-0-I-637672995748668994_800x800-1-min_1_1_1_1_1_1.png%2Bpos%3A0.0.100.100&op=resize&fmt=webp"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
