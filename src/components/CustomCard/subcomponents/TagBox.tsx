import { Chip, Stack, useTheme } from "@mui/material";
import tinycolor from "tinycolor2";

export default function TagBox() {
    const theme = useTheme();
    const chipBackground = tinycolor(theme.palette.primary.main).lighten(35).toRgbString()
    const chipText = tinycolor(theme.palette.primary.main).toRgbString()


    return (
        <Stack direction='row' spacing={.5}>
            <Chip size="small" label='Elektronika' />
            <Chip size="small" label='Gry' />
            <Chip size="small" label='Rozrywka' />
        </Stack>
    )
}