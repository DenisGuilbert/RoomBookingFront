import client from "../api";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";

export const fetchRooms: () => Promise<AxiosResponse<Room[]>> = () => client.get("/Rooms");
export const createRoom: (name:string) => Promise<AxiosResponse<void>> = (name) => client.post("/Rooms", { id: '0', name: 'name'} );