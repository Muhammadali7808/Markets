import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import Footer_img from '../../assets/footer.svg'
import Footer_img_1 from '../../assets/footer_1.svg'
import img_1 from '../../assets/img_1.svg';
import img_2 from '../../assets/img_2.svg';
import img_3 from '../../assets/img_3.svg';

export const Footer = () => {
  return (
    <>
      <Box pt={'40px'} pb={'36px'} bgcolor={'#F5F5F6'}>
        <Container maxWidth="xs" >
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Box>
              <img src={Footer_img} alt="img" />
              <Typography fontWeight={500} mb={'2px'} fontSize={'22px'} color='#000'>+99 893 374-66-44</Typography>
              <Typography fontWeight={500} mb={'2px'} fontSize={'14px'} color='#333'>справочная служба</Typography>
              <Typography fontWeight={500} mb={'2px'} fontSize={'22px'} color='#000'>+99 890 253-77-53</Typography>
              <Typography fontWeight={500} mb={'2px'} fontSize={'14px'} color='#333'>интернет-магазин</Typography>
              <Typography mb={'8px'} fontWeight={600} fontSize={'14px'} color='#333'>Оставайтесь на связи</Typography>
              <img src={Footer_img_1} alt="img" />
            </Box>
            <Box>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Условия обмена и возврата</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Каталог</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>О компании</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Контакты</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Доставка</Typography>
              <Typography fontWeight={400} fontSize={'14px'} color='#333' lineHeight={'145%'}>Оплата</Typography>
            </Box>
            <Box>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Клиентам</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Личный кабинет</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Блог</Typography>
              <Typography fontWeight={400} fontSize={'14px'} color='#333' lineHeight={'145%'}>Обратная связь</Typography>
            </Box>
            <Box>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Информация</Typography>
              <Typography fontWeight={400} mb={'16px'} fontSize={'14px'} color='#333' lineHeight={'145%'}>Пользовательское соглашение</Typography>
              <Typography fontWeight={400} fontSize={'14px'} color='#333' lineHeight={'145%'}>Политика конфиденциальности и оферта</Typography>
            </Box>
          </Stack>
        </Container>
      </Box>
      <Stack  bgcolor={'#EAEAEA'} p={'23px 23px'}>
        <Container maxWidth="xs">
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontSize={'14px'} fontWeight={400} color='#333' lineHeight={'143%'}>© 2022 Любое использование контента без письменного разрешения запрещено</Typography>
            <Stack direction={'row'} gap={'16px'}>
              <img src={img_1} alt="img" />
              <img src={img_2} alt="img" />
              <img src={img_3} alt="img" />
            </Stack>
          </Stack>
        </Container>
      </Stack>
    </>
  )
}
