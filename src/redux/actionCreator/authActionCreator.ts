import { Dispatch } from 'react';
import AuthService from '../../services/AuthService';
import { ActionTypes } from '../actions/actionTypes';
import { AuthAction } from '../actions/AuthAction';

export const login = (payload: { email: string; password: string }) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionTypes.AUTH_PENDING,
        });
        AuthService.login(payload)
            .then((data) => {
                dispatch({
                    type: ActionTypes.AUTH_SUCCESS,
                    payload: data,
                });
            })
            .catch((err: any) => {
                dispatch({
                    type: ActionTypes.AUTH_ERROR,
                    payload: err?.response?.data?.message,
                });
            });
    };
};

export const signUp = (payload: ISignup) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch({
            type: ActionTypes.AUTH_PENDING,
        });
        AuthService.signUp(payload)
            .then((data) => {
                dispatch({
                    type: ActionTypes.AUTH_SUCCESS,
                    payload: data,
                });
            })
            .catch((err: any) => {
                dispatch({
                    type: ActionTypes.AUTH_ERROR,
                    payload: err?.response?.data?.message,
                });
            });
    };
};

export const logout = (): AuthAction => {
    return {
        type: ActionTypes.LOGOUT,
    };
};
