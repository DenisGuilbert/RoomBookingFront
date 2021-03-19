import { BookingActionTypes, FetchBookings } from "../actions/BookingActions";
import { fetchBookingsForDateAndRoomApi } from "../api/BookingApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Booking } from "../domain/Booking";

export function* getBookingsForDateAndRoomSaga(action: FetchBookings) {
    try {
        console.log('Call Axios with parameters : idRoom : ' + action.idRoom + ', date : ' + action.date.toDateString());
        const response: AxiosResponse<Booking[]> = yield call(fetchBookingsForDateAndRoomApi, action.idRoom, action.date);
        console.log('response : ');
        console.log(response);
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
    console.log('default function bookingsaga');
    yield all([
        takeLatest(BookingActionTypes.FETCH_BOOKINGS, getBookingsForDateAndRoomSaga),
    ]);
}