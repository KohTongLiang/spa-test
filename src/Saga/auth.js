import { put, takeEvery, call, fork, take } from 'redux-saga/effects';
import axios from 'axios';
import { SIGN_IN, SIGN_UP, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../Constants/actiontype';

export default function* AuthSaga() {
    yield takeEvery(SIGN_UP, handleSignUp);
    yield takeEvery(SIGN_IN, handleSignIn);
}

// make a call to authentication server and get back a JWT.
function* handleSignIn(action) {
    try {
        const resp = yield call(() => axios.post(process.env.REACT_APP_API_URL + '/api/auth/login', {
            email: action.payload.email,
            password: action.payload.password,
        }).then(function (data) {
            return data;
        }));

        if (resp.data.auth) {
            yield put({
                type: SIGN_IN_SUCCESS, payload: {
                    token: resp.data.token,
                    username: action.payload.username,
                }
            });
        } else {
            yield put({ type: SIGN_IN_FAILURE, payload: "Error authentication user." });
        }
    } catch (err) {
        yield put({ type: SIGN_IN_FAILURE, payload: err.message });
    }
}

// Handler to perform sign up action. Takes input by user and create a user account on firebase authentication service
function* handleSignUp(action) {
    try {
        const resp = yield call(() => axios.post(process.env.REACT_APP_API_URL + '/api/auth/register', {
            email: action.payload.email,
            name: action.payload.username,
            password: action.payload.password,
        }).then(function (data) {
            return data;
        }));

        if (resp.data.auth) {
            yield put({
                type: SIGN_UP_SUCCESS, payload: {
                    token: resp.data.token,
                    username: action.payload.username,
                }
            });
        } else {
            yield put({ type: SIGN_UP_FAILURE, payload: "Error registering user." });
        }
    } catch (err) {
        yield put({ type: SIGN_UP_FAILURE, payload: err.message });
    }
}