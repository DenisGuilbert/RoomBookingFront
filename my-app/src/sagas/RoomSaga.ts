import { RoomAction, RoomActionTypes, CreateRoom as ActionCreateRoom } from "../actions/RoomActions";
import { fetchRooms } from "../api/RoomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { CreateRoom, Room } from "../domain/Room";

export function* getRooms() {
    try {
        console.log('Saga : getRooms()');
        const response: AxiosResponse<Room[]> = yield call(fetchRooms);
        yield put({
            type: RoomActionTypes.FETCH_ROOMS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: RoomActionTypes.FETCH_ROOMS_FAIL
        });
    }
}

export function* createRoom(action:ActionCreateRoom) {
    try {
        //ici, action.payload vaut name
        console.log('Saga : createRoom()');
        const response: AxiosResponse<Room[]> = yield call(createRoom);
        yield put({
            type: RoomActionTypes.CREATE_ROOM_SUCCESS,
            payload: action.payload
        });
    } catch (e) {
        /*yield put({
            type: RoomActionTypes.CREATE_ROOM_FAIL
        });*/
    }
}

export default function* () {
    yield all([
        takeLatest(RoomActionTypes.FETCH_ROOMS, getRooms),
        takeLatest(RoomActionTypes.CREATE_ROOM, createRoom)
    ]);
}