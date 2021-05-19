export interface User {
    id: number;
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
}

export interface CreateUser {
    firstName: string;
    lastName: string;
    idGenre: number;
    idJob: number;
}