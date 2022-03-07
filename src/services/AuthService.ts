import { httpMethods } from './httpService';

class AuthService {
    login(body: { email: string; password: string }): Promise<IAuthData> {
        return httpMethods.post('/auth/login', body);
    }

    signUp(body: ISignup): Promise<IAuthData> {
        return httpMethods.post('/auth/signup', body);
    }

    logout(): Promise<any> {
        return httpMethods.get('/auth/logout');
    }
}

export default new AuthService();
