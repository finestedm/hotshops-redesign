import { AppBar, Box, Container, Slide, Stack, Toolbar, Typography, useScrollTrigger, useTheme } from "@mui/material";
import logo from '../../media/logo.svg'

export default function TopBar() {
    const theme = useTheme();
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            <AppBar sx={{ height: 64, backgroundColor: theme.palette.grey[900] }} position="sticky" >
                <Container maxWidth='xl'>
                    <Toolbar disableGutters>
                        <Stack direction='row' spacing={2} justifyContent='space-between' alignItems='center' width='100%'>
                            <Box
                                position='relative'
                                top={-2}
                                component="img"
                                sx={{
                                    height: 25,
                                    width: 'auto',
                                }}
                                alt="The house from the offer."
                                src={logo}
                            />
                            <Box>
                                <Typography>eee</Typography>
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Slide>
    )
}