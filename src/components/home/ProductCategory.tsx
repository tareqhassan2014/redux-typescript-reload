import { Grid, Typography } from '@mui/material';
import { useCallback } from 'react';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';
import ProductCart from './ProductCart';

const ProductCategory = ({
    title,
    query,
}: {
    title: string;
    query: string;
}) => {
    const getProduct = useCallback(() => {
        return ProductService.getFilteredProduct(query);
    }, [query]);

    const { data } = useAsync<IProduct[]>(getProduct);

    return (
        <>
            {' '}
            <Typography variant="h2" sx={{ my: 5 }} color="primary">
                {title}
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="stretch"
                spacing={{ xs: 2, md: 3 }}
            >
                {data &&
                    data.map((product) => (
                        <Grid item xs={12} sm={6} md={3} key={product._id}>
                            <ProductCart product={product} />
                        </Grid>
                    ))}
            </Grid>
        </>
    );
};

export default ProductCategory;
