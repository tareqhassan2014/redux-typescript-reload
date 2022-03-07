import { ActionTypes } from './actionTypes';

interface AuthPendingAction {
    type: ActionTypes.AUTH_PENDING;
}

interface AuthSuccessAction {
    type: ActionTypes.AUTH_SUCCESS;
    payload: IAuthData;
}

interface AuthErrorAction {
    type: ActionTypes.AUTH_ERROR;
    payload: string;
}

interface LogoutAction {
    type: ActionTypes.LOGOUT;
}

export type AuthAction =
    | AuthSuccessAction
    | AuthPendingAction
    | AuthErrorAction
    | LogoutAction;
