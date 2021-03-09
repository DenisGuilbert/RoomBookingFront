import { Room } from "../domain/Room";

export interface Rooms {
    [id: number]: Room;
}

export interface RoomState {
    items: Rooms;
    loading: boolean;
    error: String | null
}