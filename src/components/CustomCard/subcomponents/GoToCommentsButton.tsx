import { Box, Button, Stack } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

export default function GoToCommentsButton() {
    return (
        <Box>
            <Button 
                fullWidth
                variant='contained' 
                startIcon={<CommentIcon />}
            >
                <Stack direction='row' spacing={2} justifyContent='space-around'>
                    <span>
                        Przejdź do komentarzy
                    </span>
                    <span>
                        (12)
                    </span>
                </Stack>
            </Button>
        </Box>
    )
}