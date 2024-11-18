import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const Phone = (item) => {
    return (
        <Box>
            <Stack width={'413px'} direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <Box sx={{ textAlign: 'center' }}>
                    <img style={{ width: '165px' }} src={item.img} alt="img" />
                </Box>
                <Stack >
                    <Box mb={'24px'}>
                        <Typography fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>{item.title}</Typography>
                        <Typography mt={'6px'} fontWeight={400} fontSize={'16px'} lineHeight={'150%'} color='#333'>{item.rame}</Typography>
                    </Box>
                    <Typography fontWeight={600} fontSize={'18px'} color='#333'>{item.price}Сум</Typography>
                </Stack>
            </Stack>
        </Box>
    )
}

