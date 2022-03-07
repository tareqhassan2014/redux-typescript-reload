import { ActionTypes } from './../actions/actionTypes';
import { CartAction } from './../actions/cartAction';

const cartReducer = (
    state: IProduct[] = [],
    action: CartAction
): IProduct[] => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART: {
            return [...state, action.payload];
        }
        case ActionTypes.REMOVE_FROM_CART: {
            return state.filter((product) => product._id !== action.payload);
        }
        case ActionTypes.CLEAR_CART: {
            return [];
        }
        default: {
            return state;
        }
    }
};

export default cartReducer;
