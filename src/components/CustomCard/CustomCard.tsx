import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid2, Stack, Typography } from "@mui/material";
import Thermometer from "./subcomponents/Thermometer";
import ImageBox from "./subcomponents/ImageBox";
import TextBox from "./subcomponents/TextBox";

export default function CustomCard() {
    return (
        <Card sx={{ maxWidth: 500, textAlign: 'left' }}>
            <CardContent>
                <Grid2 container spacing={4}>
                    <Grid2 size={4}>
                        <Stack spacing={2}>
                            <Thermometer />
                            <ImageBox />
                        </Stack>
                    </Grid2>
                    <Grid2 size={7}>
                        <TextBox />
                    </Grid2>
                </Grid2>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </CardContent>
        </Card >
    )
}