import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    clearCart,
    removeFromCart,
} from '../redux/actionCreator/cartActionCreator';
import { AppState } from '../redux/store';

const Checkout = () => {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const cart = useSelector((state: AppState) => state.cart);
    return (
        <Container sx={{ my: 3 }}>
            <Typography variant="h5">Shopping Cart</Typography>
            <Grid container>
                {cart.map((product) => (
                    <Grid item key={product._id}>
                        <Grid container alignItems="center">
                            <Grid item xs={1}>
                                <img
                                    src={product.img}
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </Grid>
                            <Grid item xs={10} sx={{ px: 5 }}>
                                <Typography>{product.name}</Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() =>
                                        dispatch(removeFromCart(product._id))
                                    }
                                >
                                    <DeleteIcon
                                        fontSize="inherit"
                                        color="error"
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Divider />
                    </Grid>
                ))}
            </Grid>
            <Grid container direction="row-reverse" sx={{ mt: 2, mb: 5 }}>
                <Grid item>
                    <Button
                        variant="contained"
                        endIcon={<ShoppingCartCheckoutIcon />}
                        size="large"
                        onClick={() => {
                            dispatch(clearCart());
                            navigate('/');
                        }}
                    >
                        Check Out
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Checkout;
