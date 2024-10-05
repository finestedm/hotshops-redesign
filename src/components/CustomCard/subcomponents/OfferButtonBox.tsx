import { Box, Button, Stack } from "@mui/material";
import GoToOfferButton from "./GoToCommentsButton";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function BottomButtonBox() {
    return (
        <Box>
            <Stack spacing={2} direction='row'>
                <GoToOfferButton />
                <Button startIcon={<BookmarkBorderIcon />} />
            </Stack>
        </Box>
    )
}