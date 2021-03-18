import { BookingActionTypes, FetchBookings } from "../actions/BookingActions";
import { fetchBookingsForDateAndRoom } from "../api/BookingApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Booking } from "../domain/Booking";

export function* getBookingsForDateAndRoomSaga(action: FetchBookings) {
    try {
        const response: AxiosResponse<Booking[]> = yield call(fetchBookingsForDateAndRoom, action.idRoom, action.date);
        yield put({
            type: BookingActionTypes.FETCH_BOOKINGS_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        yield put({
            type: BookingActionTypes.FETCH_BOOKINGS_FAIL
        });
    }
}

export default function* () {
    yield all([
        takeLatest(BookingActionTypes.FETCH_BOOKINGS, getBookingsForDateAndRoomSaga),
    ]);
}