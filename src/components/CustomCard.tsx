import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Stack, Typography } from "@mui/material";
import playstation from '../media/playstation.webp'
import Thermometer from "./Thermometer";

export default function CustomCard() {
    return (
        <Card sx={{ maxWidth: 500, textAlign: 'left' }}>
            <CardContent>
                <Grid2 container>
                    <Grid2 size={4}>
                        <Stack spacing={1}>
                            <Box><Thermometer /></Box>
                            <Box>
                                <img
                                    height='100'
                                    src={playstation}
                                    alt="green iguana"
                                    style={{ objectFit: 'cover' }}
                                    width='125'
                                />
                            </Box>
                        </Stack>
                    </Grid2>
                    <Grid2 size={8}>
                        <Typography gutterBottom variant="h6" component="div">
                            Playstation 5 Pro
                        </Typography>
                        <Stack direction='row' spacing={1}>
                            <Typography variant='h5' display="inline">
                                725 zł
                            </Typography>
                            <Typography variant='h6' color='textDisabled' display="inline">
                                999 pln
                            </Typography>
                        </Stack>
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