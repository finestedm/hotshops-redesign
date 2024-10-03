import { Box, Chip, useTheme } from "@mui/material";
import playstation from '../../../media/playstation.webp'


export default function ImageBox() {
    const theme = useTheme()


    return (
        <Box border={1} borderRadius={1} borderColor={theme.palette.divider} position='relative'>
            <img
                height='125'
                src={playstation}
                alt="green iguana"
                style={{ objectFit: 'cover' }}
                width='100%'
            />
            <Chip 
                label='-27%' 
                component={Box}
                position='absolute'
                top={-10}
                left={-10}
                sx={{transform: 'rotate(-10deg)'}}
                color="primary"
            /> 
        </Box>
    )
}