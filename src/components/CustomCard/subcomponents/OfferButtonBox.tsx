import { Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import GoToOfferButton from "./GoToCommentsButton";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

export default function BottomButtonBox() {

    const theme = useTheme();

    return (
        <Box>
            <Stack spacing={2} direction='row'>
                <IconButton size='small' sx={{ borderWidth: 1, borderColor: theme.palette.divider, borderStyle: 'solid' }}> <BookmarkBorderIcon /> </ IconButton>
                <IconButton size='small' sx={{ borderWidth: 1, borderColor: theme.palette.divider, borderStyle: 'solid' }}> <ChatOutlinedIcon /> </ IconButton>
                <GoToOfferButton />
            </Stack>
        </Box>
    )
}