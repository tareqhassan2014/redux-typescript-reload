import { Container } from '@mui/material';
import React from 'react';
import ProductCategory from '../components/home/ProductCategory';

const Home = () => {
    const Laptop =
        '?category=laptop&sort=-price&page=1&limit=6&fields=category,name,star,img,price';
    const Android =
        '?category=android&sort=-price&page=1&limit=6&fields=category,name,star,img,price';
    const Camera =
        '?category=camera&sort=-price&page=1&limit=6&fields=category,name,star,img,price';
    return (
        <Container>
            <ProductCategory title="Laptop" query={Laptop} />
            <ProductCategory title="Android" query={Android} />
            <ProductCategory title="Camera" query={Camera} />
        </Container>
    );
};

export default Home;
