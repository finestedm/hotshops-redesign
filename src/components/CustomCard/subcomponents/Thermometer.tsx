import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Thermometer() {
    return (
        <Box>
            <ToggleButtonGroup
                size='small'
                value='center'
                aria-label="text alignment"
                sx={{ padding: 0 }}
            >
                <ToggleButton value="left" aria-label="left aligned">
                    <AddIcon />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <Typography p={.6}>123c</Typography>
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned">
                    <RemoveIcon />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}