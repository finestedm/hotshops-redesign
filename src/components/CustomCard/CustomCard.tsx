import { Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid2, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Thermometer from "./subcomponents/Thermometer";
import ImageBox from "./subcomponents/ImageBox";
import TextBox from "./subcomponents/TextBox";
import OfferTime from "./subcomponents/OfferTime";
import GoToCommentsButton from "./subcomponents/GoToCommentsButton";
import TopBar from "./subcomponents/TopBar";
import CardBottom from "./subcomponents/CardBottom";
import { TOffer } from "../../data/offers";
import BottomButtonBox from "./subcomponents/OfferButtonBox";

export default function CustomCard({ offerDetails }: { offerDetails: TOffer }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Card sx={{ textAlign: 'left' }}>
            <CardContent>
                {isSmallScreen
                    ?
                    (<Box>
                        <Stack spacing={2} p={0}>
                            <TopBar />
                            <Divider />
                            <Stack direction='row' spacing={2}>
                                <Stack width='30%' spacing={1.5}>
                                    <Thermometer temperature={offerDetails.temperature} />
                                    <ImageBox />
                                </Stack>
                                <TextBox offerDetails={offerDetails} />
                            </Stack>
                            <Divider />
                            <BottomButtonBox />
                        </Stack>
                    </Box>)
                    :
                    (
                        <Stack spacing={2} p={0}>
                            <TopBar />
                            <Divider />
                            <Box>
                                <Grid2 container spacing={3}>
                                    <Grid2 size={{ xs: 12, sm: 5, md: 4 }}>
                                        <Box>
                                            <Grid2 container spacing={3}>
                                                <Grid2 size={{ xs: 3, sm: 12 }}>
                                                    <Thermometer temperature={offerDetails.temperature} />
                                                </Grid2>
                                                <Grid2 size={{ xs: 9, sm: 12 }}>
                                                    <ImageBox />
                                                </Grid2>

                                            </Grid2>
                                        </Box>
                                    </Grid2>
                                    <Grid2 size={{ xs: 12, sm: 7, md: 8 }}>
                                        <Stack spacing={4}>
                                            <TextBox offerDetails={offerDetails} />
                                        </Stack>
                                    </Grid2>
                                </Grid2>
                            </Box>
                            <Divider />
                            <BottomButtonBox />
                        </Stack>
                    )
                }
            </CardContent>
            {!isSmallScreen &&
                <Box>
                    <Divider />
                    <CardActions sx={{ backgroundColor: theme.palette.grey[50] }}>
                        <CardBottom />
                    </CardActions>
                </Box>
            }
        </Card >
    )
}