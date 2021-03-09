import { RoomActionTypes } from "../actions/RoomActions";
import { fetchRooms } from "../api/RoomApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Room } from "../domain/Room";

export function* getRooms() {
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

export default function* () {
    yield all([
        takeLatest(RoomActionTypes.FETCH_ROOMS, getRooms)
    ]);
}