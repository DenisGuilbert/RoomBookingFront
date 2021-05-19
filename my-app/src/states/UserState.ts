import { User } from "../domain/User";

export interface Users {
    [id: number]: User;
}

export interface CreateUser {
    firstName: string;
}

export interface UserState {
    items: Users;
    loading: boolean;
    error: String | null;
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
    creationStatus: boolean;
}

export interface CreateUserState {
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
    loading: boolean;
    creationStatus: boolean;
    error: String | null
}