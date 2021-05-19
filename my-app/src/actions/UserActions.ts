import { User } from '../domain/User'

//Commands to winteract with state
export enum UserActionTypes {
    FETCH_USERS = "USERS",
    FETCH_USERS_SUCCESS = "FETCH_ROOMS_SUCCESS",
    FETCH_USERS_FAIL = "FETCH_USERS_FAIL",
    CREATE_USER = "CREATE_USER",
    CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS",
    CREATE_USER_FAIL = "CREATE_USER_FAIL",
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
    //payload: Room;
}

interface CreateUserFail {
    type: UserActionTypes.CREATE_USER_FAIL;
}

export const fetchUsers = (): FetchUsers => ({
    type: UserActionTypes.FETCH_USERS
});

export const createUser = (firstName: string, lastName: string, idGenre: number, idJob: number): CreateUser => ({
    type: UserActionTypes.CREATE_USER,
    payload: { firstName: firstName, lastName: lastName, idGenre: idGenre, idJob: idJob }
});

export type UserAction =
    | FetchUsers
    | FetchUsersSuccess
    | FetchUsersFail
    | CreateUser
    | CreateUserSuccess
    | CreateUserFail;