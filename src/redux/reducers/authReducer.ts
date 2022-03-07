import { ActionTypes } from '../actions/actionTypes';
import { AuthAction } from '../actions/AuthAction';

interface IAuthState {
    data: IAuthData | null;
    status: 'idle' | 'pending' | 'success' | 'error';
    error: string | null;
}

const initialState: IAuthState = {
    data: null,
    status: 'idle',
    error: null,
};

const authReducer = (
    state: IAuthState = initialState,
    action: AuthAction
): IAuthState => {
    switch (action.type) {
        case ActionTypes.AUTH_PENDING: {
            return {
                data: null,
                status: 'pending',
                error: null,
            };
        }
        case ActionTypes.AUTH_SUCCESS: {
            return {
                data: action.payload,
                status: 'success',
                error: null,
            };
        }

        case ActionTypes.AUTH_ERROR: {
            return {
                data: null,
                status: 'error',
                error: action.payload,
            };
        }

        case ActionTypes.LOGOUT: {
            return initialState;
        }

        default: {
            return state;
        }
    }
};

export default authReducer;
