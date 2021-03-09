import client from "../api";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";

export const fetchRooms: () => Promise<AxiosResponse<Room[]>> = () => client.get("/Rooms");