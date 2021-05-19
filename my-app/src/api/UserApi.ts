import client from "../api";
import { AxiosResponse } from "axios";
import { User } from "../domain/User";
import { Genre } from "../domain/Genre";
import { Job } from "../domain/Job";

export const fetchGenres: () => Promise<AxiosResponse<Genre[]>> = () => client.get("/Genres");
export const fetchJobs: () => Promise<AxiosResponse<Job[]>> = () => client.get("/Jobs");
export const fetchUsers: () => Promise<AxiosResponse<User[]>> = () => client.get("/Users");
export const createUser: (firstName: string, lastName: string, idGenre: number, idJob: number) => Promise<AxiosResponse<void>> = (firstName, lastName, idGenre, idJob) => client.post("/Users", { id: '0', firstName, lastName, idGenre, idJob });