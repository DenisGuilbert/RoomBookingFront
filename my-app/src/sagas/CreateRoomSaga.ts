import { RoomActionTypes } from "../actions/RoomActions";
import { fetchRooms } from "../api/RoomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";
import { create } from "node:domain";

export function* createRoom() {
    try {
        console.log('Saga : createRoom()');
        /*const response: AxiosResponse<Room[]> = yield call(fetchRooms);
        yield put({
            type: RoomActionTypes.CREATE_ROOM_SUCCESS,
            payload: response.data
        });*/
    } catch (e) {
        /*yield put({
            type: RoomActionTypes.CREATE_ROOM_FAIL
        });*/
    }
}

export default function* () {
    /*yield all([
        takeLatest(RoomActionTypes.CREATE_ROOM, createRoom)
    ]);*/
}