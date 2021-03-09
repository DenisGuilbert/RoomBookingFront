import {Room} from '../domain/Room'

//Commands to winteract with state
export enum RoomActionTypes {
    FETCH_ROOMS = "ROOMS",
    FETCH_ROOMS_SUCCESS = "FETCH_ROOMS_SUCCESS",
    FETCH_ROOMS_FAIL = "FETCH_ROOMS_FAIL"
}

export interface FetchRooms {
    type: RoomActionTypes.FETCH_ROOMS;
}

interface FetchRoomsSuccess {
    type: RoomActionTypes.FETCH_ROOMS_SUCCESS;
    payload: Room;
}

interface FetchRoomsFail {
    type: RoomActionTypes.FETCH_ROOMS_FAIL;
}

export const fetchRooms = (): FetchRooms => ({
    type: RoomActionTypes.FETCH_ROOMS
});

export type RoomAction =
    | FetchRooms
    | FetchRoomsSuccess
    | FetchRoomsFail;