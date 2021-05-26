import { Genre } from "../domain/Genre";
import { Job } from "../domain/Job";
import { User } from "../domain/User";

export interface Genres {
    [id: number]: Genre;
}

export interface Jobs {
    [id: number]: Job;
}

export interface Users {
    [id: number]: User;
}

export interface CreateUser {
    firstName: string;
}

export interface UserState {
    allGenres: Genres;
    allJobs: Jobs;
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