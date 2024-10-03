import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Thermometer() {
    return (
        <Box>
            <ToggleButtonGroup
                size='small'
                value='center'
                aria-label="text alignment"
                sx={{ padding: 0 }}
            >
                <ToggleButton value="left" aria-label="left aligned" color="error">
                    <WhatshotIcon fontSize="small" color="error" />
                </ToggleButton>
                <ToggleButton value="center" aria-label="centered">
                    <Typography fontSize='120%' fontWeight={600} p={.6}>123°</Typography>
                </ToggleButton>
                <ToggleButton value="right" aria-label="right aligned" color="info">
                    <AcUnitIcon fontSize="small" color="info" />
                </ToggleButton>
            </ToggleButtonGroup>
        </Box>
    )
}