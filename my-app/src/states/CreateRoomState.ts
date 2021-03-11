import { Room } from "../domain/Room";

export interface CreateRoom {
    name: string;
}

export interface CreateRoomState {
    item: string;
    loading: boolean;
    error: String | null
}