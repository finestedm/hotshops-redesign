import { Box, Button } from "@mui/material";
import CommentIcon from '@mui/icons-material/Comment';

export default function GoToCommentsButton() {
    return (
        <Box>
            <Button 
                fullWidth
                variant='contained' 
                startIcon={<CommentIcon />}
            >
                Przejdź do komentarzy
            </Button>
        </Box>
    )
}