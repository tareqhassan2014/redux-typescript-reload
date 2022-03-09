import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';

const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const LogIn = React.lazy(() => import('./pages/LogIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Suspense fallback={<h1> Loading.....</h1>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:_id" element={<ProductDetail />} />
                </Routes>
            </Suspense>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
