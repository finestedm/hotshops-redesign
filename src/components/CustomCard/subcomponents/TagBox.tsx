import { Chip, Stack, useTheme } from "@mui/material";
import tinycolor from "tinycolor2";
import { TOffer } from "../../../data/offers";

export default function TagBox({tags}:{tags: TOffer['tags']}) {
    const theme = useTheme();
    const chipBackground = tinycolor(theme.palette.primary.main).lighten(35).toRgbString()
    const chipText = tinycolor(theme.palette.primary.main).toRgbString()


    return (
        <Stack direction='row' spacing={.5}>
            {tags.map(tag => <Chip size="small" label={tag} />)}
        </Stack>
    )
}