import { Box, Button, Stack } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function GoToOfferButton() {
    return (
        <Box>
            <Button
                fullWidth
                variant='contained'
                endIcon={<OpenInNewIcon />}
                color="primary"
            >
                Przejdź do okazji
            </Button>
        </Box>
    )
}