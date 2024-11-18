import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Box, Container, Stack, Typography } from '@mui/material'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import 'swiper/css/pagination';
import { Pagination, Autoplay, Scrollbar, Navigation } from 'swiper/modules';
import { useGetCatalog } from './service/query/useGetCatalog';
import { Catalog } from '../../components/catalog';
import { Banner } from '../../components/banner/banner';
import { useGetPhones } from './service/query/useGetPhones';
import { ProductCard } from '../../components/product-card';
import { useGetAds } from './service/query/useGetAds';
import './home.css'
import { Aksiya } from '../../components/Aksiya/aksiya';
import { Phone } from '../../components/phones/Phone';
import { useGetNootbook } from './service/query/useGetNootbook';
import { useGetComputer } from './service/query/useGetCompute';
import { NotebookCard } from '../../components/Notebook-card/notebook-card';
import { useGetBrands } from './service/query/useGetBrand';
import { Brand } from '../../components/Brands/brand';


export const Home = () => {
  const { data } = useGetCatalog()
  const { data: phone } = useGetPhones()
  const { data: ads } = useGetAds()
  const { data: Notebook } = useGetNootbook()
  const { data: computer } = useGetComputer()
  const { data: brand } = useGetBrands()
  console.log(ads);


  return (
    <Box>
      <Banner />
      <Container maxWidth="xs">
        <Stack direction={"row"} alignItems={"center"} mx={"43px"} py={"32px"}>
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={5}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            spaceBetween={"20px"}
          >
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <Catalog {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Stack>
      </Container>
      <Container maxWidth="xs" sx={{ pt: "16px", pb: "48px", position: "relative" }} >
        <Stack mb={"32px"}>
          <Typography mb={'24px'} variant='h5'>Смартфоны и планшеты</Typography>
          <Stack direction={"row"} gap={"24px"}>
            <Swiper modules={[Pagination, Scrollbar, Navigation]}
              slidesPerView={5}
              navigation={true}
            >
              {phone?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
      <Stack bgcolor={'#00CBFE'} pt={"16px"} pb={"30px"}>
        <Container>
          <Typography ml={"-95px"} mb={"24px"} lineHeight={"150%"} fontWeight={500} fontSize={'24px'} color='#000'>Акции</Typography>
          <Stack direction={"row"} gap={"24px"} justifyContent={"center"} >

            {ads?.map((item) => (
              <Aksiya {...item} />
            ))}
          </Stack>
        </Container>
      </Stack>
      <Container>
        <Stack pt={"48px"} pb={"48px"} direction={"row"} gap={"34px"} justifyContent={'center'}>
          <Stack>
            <Typography fontWeight={400} mb={'14px'} fontSize={'24px'}>Смартфоны и планшеты</Typography>
            <hr />
            <Stack>
              {phone?.slice(0, 3).map((item) => (
                <Phone {...item} />
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Typography fontWeight={400} mb={'14px'} fontSize={'24px'}>Ноутбуки, планшеты и компьютеры</Typography>
            <Stack>
              {Notebook?.slice(0, 3).map((item) => (
                <Phone {...item} />
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Typography fontWeight={400} mb={'14px'} fontSize={'24px'}>Смартфоны и планшеты</Typography>
            <hr />
            <Stack>
              {phone?.slice(0, 3).map((item) => (
                <Phone {...item} />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="xs" sx={{ pt: "32px", pb: "40px", position: "relative" }} >
        <Stack mb={"32px"}>
          <Typography mb={'24px'} variant='h5'>Смартфоны и планшеты</Typography>
          <Stack direction={"row"} gap={"24px"}>
            <Swiper modules={[Pagination, Scrollbar, Navigation]}
              slidesPerView={5}
              navigation={true}
            >
              {phone?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="xs" sx={{ pt: "16px", pb: "48px", position: "relative" }}>
        <Stack mb={"32px"}>
          <Typography mb={'24px'} variant='h5'>Ноутбуки, планшеты и компьютеры</Typography>
          <Stack direction={"row"} gap={"24px"}>
            <Swiper modules={[Pagination, Scrollbar, Navigation]}
              slidesPerView={5}
              navigation={true}
            >
              {computer?.map((item) => (
                <SwiperSlide key={item.id}>
                  <NotebookCard {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Stack>
        </Stack>
      </Container>
      <Container maxWidth="xs" sx={{ pt: "52px", pb: "100px" }}>
        <Typography fontWeight={600} mb={'24px'} fontSize={'24px'}>Популярные бренды</Typography>
        <Stack justifyContent={"center"} direction={"row"} gap={"24px"}>
            {brand?.slice(0, 6).map((item) => (
                <Brand {...item} />
            ))}
        </Stack>
      </Container>
    </Box >
  )
}
