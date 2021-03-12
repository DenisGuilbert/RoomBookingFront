import { Room } from "../domain/Room";

export interface Rooms {
    [id: number]: Room;
}

export interface CreateRoom {
    name: string;
}

export interface RoomState {
    items: Rooms;
    loading: boolean;
    error: String | null;
    name: string;
}

export interface CreateRoomState {
    name: string;
    loading: boolean;
    error: String | null
}