import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Stack, Typography } from "@mui/material";
import playstation from '../media/playstation.webp'
import Thermometer from "./Thermometer";

export default function CustomCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Grid2 container>
                    <Grid2 size={6}>
                        <Thermometer />
                        <img
                            height='100'
                            src={playstation}
                            alt="green iguana"
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                        <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Grid2>
                </Grid2>
            </CardContent>
        </Card >
    )
}