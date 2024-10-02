import { Chip, Stack, useTheme } from "@mui/material";
import tinycolor from "tinycolor2";

export default function TagBox() {
    const theme = useTheme();
    const chipBackground = tinycolor(theme.palette.primary.main).lighten(35).toRgbString()
    const chipText = tinycolor(theme.palette.primary.main).toRgbString()


    return (
        <Stack direction='row' spacing={.5}>
            <Chip variant="outlined" label='Elektronika' sx={{ color: theme.palette.primary.main }} />
            <Chip label='Gry' />
            <Chip label='Rozrywka' />
        </Stack>
    )
}