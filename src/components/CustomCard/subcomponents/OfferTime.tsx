import { Box, Icon, Stack, Typography } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function OfferTime() {
    return (
        <Stack direction='row' alignItems='center' alignContent='center' spacing={.25}>
            <AccessTimeIcon fontSize="small"/> <Typography variant="body1" display='inline'>16/11/2024 - 23/11/2024</Typography>
        </Stack>
    )
}