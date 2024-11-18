import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export const Brand = (item) => {
    return (
        <Stack gap={'16px'}>
            <Box>
                <img style={{ width: '200px', height: '100px' }} src={item.img} alt="img" />
            </Box>
        </Stack>
    )
}

