import { ActionTypes } from './actionTypes';

interface AddToCart {
    type: ActionTypes.ADD_TO_CART;
    payload: IProduct;
}

interface RemoveFromCart {
    type: ActionTypes.REMOVE_FROM_CART;
    payload: string;
}

interface ClearCart {
    type: ActionTypes.CLEAR_CART;
}

export type CartAction = AddToCart | RemoveFromCart | ClearCart;
