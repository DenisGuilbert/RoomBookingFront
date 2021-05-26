import { UserAction, UserActionTypes, CreateUser as ActionCreateUser, FetchGenres } from "../actions/UserActions";
import { fetchGenres, fetchJobs, fetchUsers, createUser as create } from "../api/UserApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { User } from "../domain/User";
import { Genre } from "../domain/Genre";
import { Job } from "../domain/Job";

export function* getGenresSaga() {
    try {
        console.log('call getGenresSaga');
        const response: AxiosResponse<Genre[]> = yield call(fetchGenres);
        console.log('response genres : ');
        console.log(response);
        yield put({
            type: UserActionTypes.FETCH_GENRES_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        console.log('fetch genres fail');
        yield put({            
            type: UserActionTypes.FETCH_GENRES_FAIL
        });
    }
}

export function* getJobsSaga() {
    try {
        console.log('call getJobsSaga');
        const response: AxiosResponse<Job[]> = yield call(fetchJobs);
        console.log('response jobs : ');
        console.log(response);
        yield put({
            type: UserActionTypes.FETCH_JOBS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        console.log('fetch jobs fail');
        yield put({
            type: UserActionTypes.FETCH_JOBS_FAIL
        });
    }
}

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
        const response: AxiosResponse<void> = yield call(create, action.payload.firstName, action.payload.lastName, action.payload.idGenre, action.payload.idJob);

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
        takeLatest(UserActionTypes.FETCH_GENRES, getGenresSaga),
        takeLatest(UserActionTypes.FETCH_JOBS, getJobsSaga),
        takeLatest(UserActionTypes.FETCH_USERS, getUsersSaga),
        takeLatest(UserActionTypes.CREATE_USER, createUserSaga)
    ]);
}