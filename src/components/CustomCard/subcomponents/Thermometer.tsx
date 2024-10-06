import { Box, ToggleButton, ToggleButtonGroup, Typography, useMediaQuery, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { TOffer } from "../../../data/offers";

export default function Thermometer({ temperature }: { temperature: TOffer['temperature'] }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ToggleButtonGroup
            fullWidth
            size='small'
            value='center'
            aria-label="text alignment"
            sx={{ padding: 0, height: '100%' }}
            orientation={isSmallScreen ? 'vertical' : 'horizontal'}

        >
            <ToggleButton value="left" aria-label="left aligned" color="error">
                <WhatshotIcon fontSize="small" color="error" />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered" sx={{ height: '100%' }}>
                <Typography fontSize='120%' fontWeight={600} p={.6} >{temperature}°</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned" color="info">
                <AcUnitIcon fontSize="small" color="info" />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}