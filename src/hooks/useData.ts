import { useSelector } from 'react-redux';
import { AppState } from '../redux/store';

const useData = (collection: 'cart' | 'auth') => {
    return useSelector((state: AppState) => state[collection]);
};

export default useData;
