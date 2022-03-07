import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as DomLink, useNavigate } from 'react-router-dom';
import { signUp } from '../redux/actionCreator/authActionCreator';
import { AppState } from '../redux/store';

interface ILoginFormData {
    email: string;
    password: string;
    name: string;
    phone: string;
}

function Copyright(props: any) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUp() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { error, status } = useSelector((state: AppState) => state.auth);

    status === 'success' && navigate('/');
    console.log(error);

    const [formData, setFormData] = React.useState<ILoginFormData>({
        name: '',
        email: '',
        password: '',
        phone: '',
    });

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputFields = ['name', 'email', 'phone', 'password'];

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                        {inputFields.map((field) => (
                            <TextField
                                key={field}
                                margin="normal"
                                required
                                fullWidth
                                id={field}
                                label={field.toUpperCase()}
                                name={field}
                                onChange={handleOnChange}
                                autoComplete={field}
                                autoFocus={field === 'name'}
                                onKeyPress={(e) =>
                                    e.code === 'Enter' &&
                                    dispatch(signUp(formData))
                                }
                            />
                        ))}
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <LoadingButton
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => dispatch(signUp(formData))}
                            loading={status === 'pending'}
                        >
                            Sign Up
                        </LoadingButton>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <DomLink to={'/login'}>
                                    {'Already have an account? Sign in'}
                                </DomLink>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
