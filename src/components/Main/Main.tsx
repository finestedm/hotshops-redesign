import { Box, Container, Grid2, Stack, useMediaQuery, useTheme } from "@mui/material";
import CustomCard from "../CustomCard/CustomCard";
import offers from "../../data/offers";

export default function Main() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box justifyContent='center'>
            <Container maxWidth='xl' component={Grid2} container spacing={6} disableGutters={isSmallScreen ? true : false}>
                <Grid2 size={{ md: 8 }} >
                    <Box className='okazje'> 
                        <Stack spacing={4}>
                            {offers.map(offer => CustomCard({offerDetails: offer}))}
                        </Stack>
                    </Box>
                </Grid2>
                <Grid2 size={{ md: 4 }}>
                    <Box className='sidepanel'> 
                        <Stack spacing={4}>
                            {/* <CustomCard /> */}
                        </Stack>
                    </Box>
                </Grid2>
            </Container>
        </Box>
    )
}