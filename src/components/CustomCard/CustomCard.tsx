import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid2, Stack, Typography, useTheme } from "@mui/material";
import Thermometer from "./subcomponents/Thermometer";
import ImageBox from "./subcomponents/ImageBox";
import TextBox from "./subcomponents/TextBox";
import OfferTime from "./subcomponents/OfferTime";
import GoToCommentsButton from "./subcomponents/GoToCommentsButton";
import TopBar from "./subcomponents/TopBar";

export default function CustomCard() {
    const theme = useTheme();

    return (
        <Card sx={{ maxWidth: 500, textAlign: 'left' }}>
            <CardContent>
                <Stack spacing={1} p={0}>
                    <TopBar />
                    <Divider />
                    <Box>
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
                    </Box>
                    <GoToCommentsButton />
                </Stack>
            </CardContent>
            <Divider />
            <CardActions sx={{backgroundColor: theme.palette.grey[50]}}>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card >
    )
}