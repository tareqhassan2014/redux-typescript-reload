import { httpMethods } from './httpService';

class ProductService {
    geAllProduct(): Promise<IProduct[]> {
        return httpMethods.get('/product');
    }
    getFilteredProduct(query: string): Promise<IProduct[]> {
        return httpMethods.get('/product' + query);
    }
    getProductBuyId(id: string): Promise<IProduct> {
        return httpMethods.get(`/product/${id}`);
    }
    addProduct(body: IProduct): Promise<IProduct> {
        return httpMethods.post('/product', body);
    }
    deleteProduct(id: string): Promise<IProduct> {
        return httpMethods.delete(`/product/${id}`);
    }
    updateProduct(id: string, body: IProduct): Promise<IProduct> {
        return httpMethods.patch(`/product/${id}`, body);
    }
}

export default new ProductService();
