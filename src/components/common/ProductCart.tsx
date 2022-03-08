import { Button, CardActionArea, Grid, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../redux/actionCreator/cartActionCreator';
import './cart.css';

const ProductCart = ({ product }: { product: IProduct }) => {
    const { _id, name, price, img, category, seller, shipping, star } = product;
    const dispatch = useDispatch();
    return (
        <Card sx={{ maxWidth: 345 }} className="card">
            <Grid item xs={12}>
                <CardActionArea
                    style={{ display: 'grid', width: '100% !important' }}
                    component={Link}
                    to={`/product/${_id}`}
                >
                    <CardMedia
                        component="img"
                        image={img}
                        alt={name}
                        style={{ width: '80%' }}
                    />
                </CardActionArea>
                <Typography
                    gutterBottom
                    className="textLeft"
                    variant="subtitle1"
                    component={Link}
                    to={`/product/${_id}`}
                    style={{ fontWeight: '600' }}
                >
                    {name.slice(0, 28)}
                </Typography>
            </Grid>

            <Box>
                <Grid item xs={12}>
                    <Typography
                        gutterBottom
                        variant="caption"
                        component="div"
                        style={{ fontWeight: '600' }}
                    >
                        {seller} : {category}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        $ {price}
                    </Typography>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={6}>
                        <Rating name="read-only" value={star} readOnly />
                        <Typography
                            gutterBottom
                            variant="body2"
                            component="div"
                        >
                            Shipping {shipping}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        className="flex"
                        style={{ justifyContent: 'space-evenly' }}
                    >
                        <Button
                            size="small"
                            className="cardButton"
                            color="primary"
                            onClick={() => dispatch(addToCart(product))}
                        >
                            <CardMedia
                                component="img"
                                className="cardImage"
                                image="https://i.ibb.co/tMCWQRT/istockphoto-1199519158-170667a-removebg-preview.png"
                            />
                        </Button>
                        <Button size="small" className="button" color="primary">
                            BUY NOW
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Card>
    );
};

export default ProductCart;
