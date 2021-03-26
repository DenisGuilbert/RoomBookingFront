import { RoomAction, RoomActionTypes, CreateRoom as ActionCreateRoom } from "../actions/RoomActions";
import { fetchRooms, createRoom as create } from "../api/RoomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";

export function* getRoomsSaga() {
    try {
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

export function* createRoomSaga(action: ActionCreateRoom) {
    try {
        const response: AxiosResponse<void> = yield call(create, action.payload);

        if (response.status != 200) {
            throw new Error('The room\'s creation has failed.');
        }

        yield put({
            type: RoomActionTypes.CREATE_ROOM_SUCCESS,
            payload: action.payload
        });
    } catch (e) {
        yield put({
            type: RoomActionTypes.CREATE_ROOM_FAIL
        });
    }
}

export default function* () {
    yield all([
        takeLatest(RoomActionTypes.FETCH_ROOMS, getRoomsSaga),
        takeLatest(RoomActionTypes.CREATE_ROOM, createRoomSaga)
    ]);
}