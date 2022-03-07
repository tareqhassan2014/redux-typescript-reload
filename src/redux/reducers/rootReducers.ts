import { combineReducers } from 'redux';
import auth from './authReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    cart,
    auth,
});

export type AppType = ReturnType<typeof rootReducer>;

export default rootReducer;
