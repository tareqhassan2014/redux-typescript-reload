interface IProduct {
    category: string;
    createdAt: string;
    features: IFeature[];
    img: string;
    name: string;
    price: number;
    priceFraction: string;
    seller: string;
    shipping: number;
    star: number;
    starCount: number;
    stock: number;
    updatedAt: string;
    url: string;
    wholePrice: string;
    __v: number;
    _id: string;
}

interface IFeature {
    description: string;
    value: string;
}

interface IAuthData {
    name: string;
    email: string;
    role: string;
    _id: string;
    token: string;
}

interface ISignup {
    name: string;
    phone: string;
    email: string;
    password: string;
}
