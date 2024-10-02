import { Box, Stack, Typography, useTheme } from "@mui/material";
import TagBox from "./TagBox";

export default function TextBox() {
    const theme = useTheme();

    return (
        <Box>
            <Stack spacing={1}>
                <Typography gutterBottom variant="h6" component="div">
                    Playstation 5 Pro
                </Typography>
                <Typography variant='h5' display="inline" color="primary">
                    725 zł
                    <Typography variant='h6' color='textDisabled' display="inline" sx={{ textDecoration: 'line-through', textDecorationColor: theme.palette.grey[600], fontWeight: 500 }}>
                        {` 999 zł`}
                    </Typography>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <TagBox />
            </Stack>
        </Box>
    )
}