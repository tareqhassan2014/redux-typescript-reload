import { Container, Grid } from '@mui/material';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import ApplePlayStore from '../svg/ApplePlayStore';
import GooglePlayStore from '../svg/GooglePlayStore';

const Footer = () => {
    return (
        <div className="footer__component py-3">
            <Container>
                <div className="footer_main py-5">
                    <Grid container>
                        <Grid item md={3}>
                            <div className="download-icons p-2">
                                <h5 className="mb-3"> Download </h5>
                                <GooglePlayStore />
                                <br />
                                <ApplePlayStore />
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="footer-menu p-2">
                                <h5 className="mb-3"> Menu </h5>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#privacy"> Privacy Policy </a>
                                    </li>
                                    <li>
                                        <a href="#cookies"> Cookie Policy </a>
                                    </li>
                                    <li>
                                        <a href="#purchasing">
                                            {' '}
                                            Purchasing Policy{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#terms">
                                            {' '}
                                            Terms &amp; Conditions{' '}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#career"> Career </a>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="p-2">
                                <h5 className="mb-3"> Contact Us </h5>
                                <p>
                                    House #__, Road #__,
                                    <br />
                                    Dhanmondi, Dhaka-____.
                                </p>
                                <p>Email: support@fvaly.com.bd</p>
                                <p>Contact no: +8801711111111</p>
                            </div>
                        </Grid>
                        <Grid item md={3}>
                            <div className="social-icons float-md-end p-2">
                                <h5 className="mb-3">Get in Touch</h5>
                                <a
                                    href="https://facebook.com"
                                    className="social_bg facebook-bg fs-4"
                                >
                                    <FaFacebookF />
                                </a>
                                <a
                                    href="https://iastagram.com"
                                    className="social_bg instagram-bg fs-4 mx-3"
                                >
                                    <AiOutlineInstagram />
                                </a>
                                <a
                                    href="https://youtube.com"
                                    className="social_bg youtube-bg fs-4 "
                                >
                                    <AiOutlineYoutube />
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <hr />
                <p className="text-center pt-3">
                    &copy; 2021 fvaly.com Limited. All rights reserved.
                </p>
            </Container>
        </div>
    );
};

export default Footer;
