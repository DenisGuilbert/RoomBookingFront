import { User } from '../domain/User';
import { Genre } from '../domain/Genre';
import { Job } from '../domain/Job';

//Commands to winteract with state
export enum UserActionTypes {
    FETCH_GENRES = "GENRES",
    FETCH_GENRES_SUCCESS = "FETCH_GENRES_SUCCESS",
    FETCH_GENRES_FAIL = "FETCH_GENRES_FAIL",
    FETCH_JOBS = "JOBS",
    FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS",
    FETCH_JOBS_FAIL = "FETCH_JOBS_FAIL",
    FETCH_USERS = "USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
    CREATE_USER = "CREATE_USER",
    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    CREATE_USER_FAIL = "CREATE_USER_FAIL",
}

export interface FetchGenres {
    type: UserActionTypes.FETCH_GENRES;
}

interface FetchGenresSuccess {
    type: UserActionTypes.FETCH_GENRES_SUCCESS;
    payload: Genre;
}

interface FetchGenresFail {
    type: UserActionTypes.FETCH_GENRES_FAIL;
}

export interface FetchJobs {
    type: UserActionTypes.FETCH_JOBS;
}

interface FetchJobsSuccess {
    type: UserActionTypes.FETCH_JOBS_SUCCESS;
    payload: Job;
}

interface FetchJobsFail {
    type: UserActionTypes.FETCH_JOBS_FAIL;
}

export interface FetchUsers {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: User;
}

interface FetchUsersFail {
    type: UserActionTypes.FETCH_USERS_FAIL;
}

export interface CreateUser {
    type: UserActionTypes.CREATE_USER;
    payload: any;
}

interface CreateUserSuccess {
    type: UserActionTypes.CREATE_USER_SUCCESS;
    //payload: User;
}

interface CreateUserFail {
    type: UserActionTypes.CREATE_USER_FAIL;
}

export const fetchGenres = (): FetchGenres => ({
    type: UserActionTypes.FETCH_GENRES
});

export const fetchJobs = (): FetchJobs => ({
    type: UserActionTypes.FETCH_JOBS
});

export const fetchUsers = (): FetchUsers => ({
    type: UserActionTypes.FETCH_USERS
});

export const createUser = (firstName: string, lastName: string, idGenre: number, idJob: number): CreateUser => ({
    type: UserActionTypes.CREATE_USER,
    payload: { firstName: firstName, lastName: lastName, idGenre: idGenre, idJob: idJob }
});

export type UserAction =
    | FetchGenres
    | FetchGenresSuccess
    | FetchGenresFail
    | FetchJobs
    | FetchJobsSuccess
    | FetchJobsFail
    | FetchUsers
    | FetchUsersSuccess
    | FetchUsersFail
    | CreateUser
    | CreateUserSuccess
    | CreateUserFail;