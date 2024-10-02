import { Box, Stack } from "@mui/material"
import UserAvatar from "./UserAvatar"
import OfferTime from "./OfferTime"

export default function TopBar() {
    return (
        <Box>
            <Stack direction='row' spacing={1} justifyContent='space-between'>
                <OfferTime />
                <UserAvatar />
            </Stack>
        </Box>
    )
}