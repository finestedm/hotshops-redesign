import { Box, Button, Stack } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function GoToOfferButton() {
    return (
        <Button
            sx={{
                borderRadius: 10,
                textOverflow: 'ellipsis',  // Truncates text with ellipsis
                whiteSpace: 'nowrap',      // Prevents the text from wrapping to a new line
                overflow: 'hidden'         // Hides the overflowed text
            }}
            fullWidth
            variant='contained'
            endIcon={<OpenInNewIcon />}
            color="primary"
        >
            Otwórz okazję
        </Button>
    )
}