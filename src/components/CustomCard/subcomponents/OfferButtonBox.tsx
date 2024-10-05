import { Box, Button, IconButton, Stack, useTheme } from "@mui/material";
import GoToOfferButton from "./GoToCommentsButton";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function BottomButtonBox() {
    const theme = useTheme();
    return (
        <Box>
            <Stack spacing={2} direction='row'>
                <GoToOfferButton />
                <IconButton><BookmarkBorderIcon /></IconButton>
            </Stack>
        </Box>
    )
}