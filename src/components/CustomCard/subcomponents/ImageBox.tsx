import { Box, Chip, useTheme } from "@mui/material";
import playstation from '../../../media/playstation.webp'


export default function ImageBox() {
    const theme = useTheme()


    return (
        <Box
            border={1}
            borderRadius={1}
            borderColor={theme.palette.divider}
            position="relative"
            flexGrow={1} // Ensures the box stretches to match the height of its sibling
        >
            <img
                src={playstation}
                alt="green iguana"
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',  // Ensures the image covers the full height of the Box
                }}
            />
            <Chip
                label="-27%"
                component={Box}
                position="absolute"
                top={-10}
                left={-10}
                sx={{
                    transform: 'rotate(-10deg)',
                    fontWeight: 800
                }}
                color="primary"
            />
        </Box>

    )
}