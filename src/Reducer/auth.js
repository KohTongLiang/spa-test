import { SIGN_IN, SIGN_UP, SIGN_OUT, SIGN_IN_SUCCESS, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, SIGN_IN_FAILURE } from '../Constants/actiontype';

const initialState = {
    auth: false,
    token: '',
    username: '',
    errorMsg: '',
}

export default function AuthReducer (state = initialState, action) {
    switch (action.type) {
        case SIGN_IN_SUCCESS:
            return Object.assign({}, state, {
                token: initialState.token.concat(action.payload.token),
                username: initialState.username.concat(action.payload.username),
                auth: !initialState.auth,
            });
        case SIGN_UP_SUCCESS:
            return Object.assign({}, state, {
                token: initialState.token.concat(action.payload.token),
                username: initialState.username.concat(action.payload.username),
                auth: !initialState.auth,
            });
        case SIGN_IN_FAILURE:
            return Object.assign({}, state, {
                errorMsg: initialState.errorMsg.concat(action.payload)
            });
        case SIGN_UP_FAILURE:
            return Object.assign({}, state, {
                errorMsg: initialState.errorMsg.concat(action.payload)
            });
        case SIGN_OUT:
            return initialState;
    };

    return state;
}