import { Avatar, Box, Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';

export default function CardBottom() {
    return (
        <Box px={1.5} width='100%'>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <Box>
                    <Stack direction='row' spacing={1}>
                        <Button disableElevation variant="contained" color="inherit">Amazon</Button>
                        <Button disableElevation variant="contained" color="inherit">Allegro</Button>
                        <Button disableElevation variant="contained" color="inherit">Ceneo</Button>
                    </Stack>
                </Box>
                <Box>
                    <IconButton><ShareIcon /></IconButton>
                </Box>
            </Stack>
        </Box>
    )
}