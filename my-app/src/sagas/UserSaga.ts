import { UserAction, UserActionTypes, CreateUser as ActionCreateUser } from "../actions/UserActions";
import { fetchUsers, createUser as create } from "../api/UserApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { User } from "../domain/User";

export function* getUsersSaga() {
    try {
        const response: AxiosResponse<User[]> = yield call(fetchUsers);
        yield put({
            type: UserActionTypes.FETCH_USERS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: UserActionTypes.FETCH_USERS_FAIL
        });
    }
}

export function* createUserSaga(action: ActionCreateUser) {
    try {
        const response: AxiosResponse<void> = yield call(create, action.payload);

        if (response.status != 200) {
            throw new Error('The user\'s creation has failed.');
        }

        yield put({
            type: UserActionTypes.CREATE_USER_SUCCESS,
            payload: action.payload
        });
    } catch (e) {
        yield put({
            type: UserActionTypes.CREATE_USER_FAIL
        });
    }
}

export default function* () {
    yield all([
        takeLatest(UserActionTypes.FETCH_USERS, getUsersSaga),
        takeLatest(UserActionTypes.CREATE_USER, createUserSaga)
    ]);
}