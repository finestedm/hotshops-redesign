import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export default function Thermometer() {
    return (
        <ToggleButtonGroup
            value='center'
            aria-label="text alignment"
        >
            <ToggleButton value="left" aria-label="left aligned">
                <AddIcon />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <Typography>123C</Typography>
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                <RemoveIcon />
            </ToggleButton>
        </ToggleButtonGroup>
    )
}