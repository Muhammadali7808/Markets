import { Box, Stack } from '@mui/material'
import React from 'react'
 
export const Aksiya = (item) => {
  return (
    <Stack direction={'row'} gap={'16px'}>
      <img src={item.img} alt="img" />
    </Stack>
  )
}

