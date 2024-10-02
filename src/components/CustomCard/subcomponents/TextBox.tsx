import { Avatar, Box, Chip, Stack, Typography, useTheme } from "@mui/material";
import TagBox from "./TagBox";
import Poland from '../../../media/Flag_of_Poland.svg.webp'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default function TextBox() {
    const theme = useTheme();

    return (
        <Box>
            <Stack spacing={1}>
                <Typography gutterBottom variant="h6" component="div">
                    Playstation 5 Pro
                </Typography>
                <Box>
                    <Typography variant='h5' display="inline" color="primary">
                        725 zł
                        <Typography variant='h6' color='textDisabled' display="inline" sx={{ textDecoration: 'line-through', textDecorationColor: theme.palette.grey[600], fontWeight: 500 }}>
                            {` 999 zł`}
                        </Typography>
                    </Typography>
                    <br />
                    <Stack direction='row' alignItems='center' alignContent='center' spacing={.25}>
                        <LocalShippingOutlinedIcon htmlColor={theme.palette.text.secondary} fontSize="small"/>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>22 zł</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    </Typography>
                </Box>
                <Box>
                    <Chip 
                        variant="outlined" 
                        label="Kraj wysyłki"  
                        avatar={<Avatar alt="Polska" src={Poland} />}
                    />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Oto opis przedmiotu Playstation, którego okazję tutaj prezentuję. 
                </Typography>
                <TagBox />
            </Stack>
        </Box>
    )
}