import { SIGN_IN, SIGN_UP, SIGN_OUT } from '../Constants/actiontype';

export function signIn (payload) {
    return { type: SIGN_IN, payload }
}

export function signUp (payload) {
    return { type: SIGN_UP, payload }
}

export function signOut (payload) {
    return { type: SIGN_OUT, payload }
}