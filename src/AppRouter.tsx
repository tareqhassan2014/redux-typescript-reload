import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ResponsiveAppBar from './components/common/ResponsiveAppBar';
import Checkout from './pages/Checkout';
import ProductDetail from './pages/ProductDetail';
import SignUp from './pages/SignUp';

const Home = React.lazy(() => import('./pages/Home'));
const Contact = React.lazy(() => import('./pages/Contact'));
const LogIn = React.lazy(() => import('./pages/LogIn'));

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ResponsiveAppBar />
            <Suspense fallback={<h1> Loading.....</h1>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/product/:_id" element={<ProductDetail />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
