import { Box, useTheme } from "@mui/material";
import playstation from '../../../media/playstation.webp'


export default function ImageBox() {
    const theme = useTheme()


    return (
        <Box border={1} borderRadius={1} borderColor={theme.palette.divider}>
            <img
                height='125'
                src={playstation}
                alt="green iguana"
                style={{ objectFit: 'cover' }}
                width='100%'
            />
        </Box>
    )
}