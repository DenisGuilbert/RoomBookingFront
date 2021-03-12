import {Room} from '../domain/Room'

//Commands to winteract with state
export enum RoomActionTypes {
    FETCH_ROOMS = "ROOMS",
    FETCH_ROOMS_SUCCESS = "FETCH_ROOMS_SUCCESS",
    FETCH_ROOMS_FAIL = "FETCH_ROOMS_FAIL",

    CREATE_ROOM = "CREATE_ROOM",
    CREATE_ROOM_SUCCESS = "CREATE_ROOM_SUCCESS",
    CREATE_ROOM_FAIL = "CREATE_ROOM_FAIL",
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

export interface CreateRoom {
    type: RoomActionTypes.CREATE_ROOM;
    payload: string;
}

interface CreateRoomSuccess {
    type: RoomActionTypes.CREATE_ROOM_SUCCESS;
    //payload: Room;
}

interface CreateRoomFail {
    type: RoomActionTypes.CREATE_ROOM_FAIL;
}

export const fetchRooms = (): FetchRooms => ({
    type: RoomActionTypes.FETCH_ROOMS
});

export const createRoom = (name): CreateRoom => ({
    type: RoomActionTypes.CREATE_ROOM,
    payload: name
});

export type RoomAction =
    | FetchRooms
    | FetchRoomsSuccess
    | FetchRoomsFail
    | CreateRoom
    | CreateRoomSuccess
    | CreateRoomFail;