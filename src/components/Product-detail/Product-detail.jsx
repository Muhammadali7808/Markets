import { Box, Container, Rating, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPhones } from '../../pages/home/service/query/useGetPhones';

export const ProductDetail = () => {
    const { id } = useParams();
    const { data: Phones, isLoading, isError } = useGetPhones();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError || !Phones) {
        return <div>Error fetching product details</div>;
    }

    const product = Phones.find((item) => item.id === parseInt(id, 10));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <Container>
            <Box mt={'40px'} mb={'40px'} width={'241px'} textAlign={'center'} borderRadius={'10px'}  boxShadow={"0px 0px 99px -9px rgba(161,137,161,1)"} p={'5px'}>
                <Box>
                    <img style={{ width: '215px' }} src={product.img} alt={product.title} />
                </Box>
                <Typography variant="h5">{product.title}</Typography>
                <Typography variant="body1">{`Price: ${product.price}`}</Typography>
                <Typography variant="body2">{`RAM: ${product.rame}`}</Typography>
                <Rating  defaultValue={product.rating} precision={1} size='medium' readOnly />
            </Box>
        </Container>
    );
};
