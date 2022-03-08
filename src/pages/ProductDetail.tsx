import { Button, Container, Grid, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAsync from '../hooks/useAsync';
import { addToCart } from '../redux/actionCreator/cartActionCreator';
import ProductService from '../services/ProductService';

const ProductDetail = () => {
    let { _id } = useParams();

    const getProduct = useCallback(() => {
        return ProductService.getProductBuyId(_id!);
    }, [_id]);

    const { data, isSuccess } = useAsync<IProduct>(getProduct);

    const { name, img, features, price, category, star } = (data ||
        {}) as IProduct;

    const dispatch = useDispatch();

    return (
        <Container>
            {isSuccess && (
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={{ xs: 2, md: 3 }}
                >
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={img} alt={name} style={{ width: '100%' }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="h5" color="primary">
                            {category}
                        </Typography>

                        <ul>
                            {features.map((feature, index) => (
                                <Typography
                                    key={index}
                                    gutterBottom
                                    variant="body2"
                                    component="li"
                                >
                                    {feature.description} : {feature.value}
                                </Typography>
                            ))}
                        </ul>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="span">Rating :</Typography>
                            <Rating value={star} size="large" />
                            <Typography component="span">({star})</Typography>
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                my: 3,
                            }}
                        >
                            <Button
                                size="large"
                                color="primary"
                                onClick={() => dispatch(addToCart(data!))}
                            >
                                ADD TO CARD
                            </Button>
                            <Button size="large" color="primary">
                                $ {price} BUY NOW
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            )}
        </Container>
    );
};

export default ProductDetail;
