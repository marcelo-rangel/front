import {put, takeEvery,all,call} from 'redux-saga/effects'
import { userActions } from './user.slice'



export function* login(props: any){
    yield put(userActions.setData(props.payload))
}

function* watchLogin(){
    yield takeEvery('user/login',login)
}

export default function* userSaga(){
    yield all([
        watchLogin(),
    ])
}