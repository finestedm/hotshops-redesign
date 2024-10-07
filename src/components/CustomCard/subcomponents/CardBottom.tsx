import { Avatar, Box, Button, ButtonGroup, Divider, IconButton, Stack } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import amazonLogo from '../../../media/Amazon_(company)-Logo.wine.svg'

export default function CardBottom() {
    return (
        <Box px={1.5} width='100%'>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Box>
                    <Stack direction='row' spacing={1}>
                        <Button variant='outlined' sx={{ height: 35, p: 0.25 }} color="primary"><img height='100%' width='100%' src={amazonLogo} /></Button>
                        <Button disableElevation variant="contained" color="inherit">Allegro</Button>
                        <Button disableElevation variant="contained" color="inherit">Ceneo</Button>
                        <Divider orientation="vertical" />
                    </Stack>
                </Box>
                <Box>
                    <IconButton> <BookmarkBorderIcon /></ IconButton>
                    <IconButton><ShareIcon /></IconButton>
                </Box>
            </Stack>
        </Box>
    )
}