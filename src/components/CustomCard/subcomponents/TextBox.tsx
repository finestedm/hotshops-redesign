import { Avatar, Box, Chip, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import TagBox from "./TagBox";
import Poland from '../../../media/Flag_of_Poland.svg.webp'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import { TOffer } from "../../../data/offers";

export default function TextBox({ offerDetails }: { offerDetails: TOffer }) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box>
            <Stack spacing={1}>
                <Typography gutterBottom variant="h6" component="div">
                    {offerDetails.product}
                </Typography>
                <Box>
                    <Typography variant='h5' display="inline" color="primary">
                        {offerDetails.discountedPrice} {offerDetails.originalPriceCurrency}
                        <Typography ml={1} variant='h6' color='textDisabled' display="inline" sx={{ textDecoration: 'line-through', textDecorationColor: theme.palette.grey[600], fontWeight: 500 }}>
                            {offerDetails.originalPrice} {offerDetails.originalPriceCurrency}
                        </Typography>
                        <Typography variant='body1' color='text.secondary' display="inline" ml={1}>
                            {`(- ${(Math.trunc(((offerDetails.originalPrice-offerDetails.discountedPrice)/offerDetails.originalPrice)*100)).toString()} %)`}
                        </Typography>
                    </Typography>
                    <br />
                    <Stack direction='row' alignItems='center' alignContent='center' spacing={.25}>
                        <LocalShippingOutlinedIcon htmlColor={theme.palette.text.secondary} fontSize="small"/>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>{offerDetails.shippingPrice} {offerDetails.shippingPriceCurrency}</Typography>
                    </Stack>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>Sklep: <em>Allegro.pl</em></Typography>
                </Box>
                <Box>
                    <Chip 
                        variant="outlined" 
                        label="Kraj wysyłki"  
                        avatar={<Avatar alt={offerDetails.shippedFrom} src={Poland} />}
                    />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {offerDetails.description} 
                </Typography>
                {!isSmallScreen && <TagBox tags={offerDetails.tags} />}
            </Stack>
        </Box>
    )
}