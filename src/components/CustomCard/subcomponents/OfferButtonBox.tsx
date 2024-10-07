import { Box, Button, Grid2, IconButton, Stack, Typography, useTheme } from "@mui/material";
import GoToOfferButton from "./GoToCommentsButton";
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function BottomButtonBox() {

    const theme = useTheme();

    return (
        <Box>
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                <IconButton size='small' sx={{ borderWidth: 1, borderColor: theme.palette.divider, borderStyle: 'solid', borderRadius: 100, px: 1 }}> <Stack spacing={1} direction='row'><ChatOutlinedIcon /> <Typography> 12</Typography></Stack> </ IconButton>
                <GoToOfferButton />
            </Stack>
        </Box >
    )
}