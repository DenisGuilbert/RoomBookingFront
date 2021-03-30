import { BookingActionTypes, FetchBookings, CreateBooking, DeleteBooking } from "../actions/BookingActions";
import { fetchBookingsForDateAndRoomApi, createBookingApi, deleteBookingApi } from "../api/BookingApi";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { Booking } from "../domain/Booking";
//import { CreateBooking } from "../states/BookingState";

export function* getBookingsForDateAndRoomSaga(action: FetchBookings) {
    try {
        const response: AxiosResponse<Booking[]> = yield call(fetchBookingsForDateAndRoomApi, action.idRoom, action.date);
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

export function* createBookingSaga(action: CreateBooking) {
    try {
        const response: AxiosResponse<JSON> = yield call(createBookingApi, action.bookingToCreate);
        if (response.status == 207) {
            //Here, a booking with the same parameters already exists.
            //Then, the API can return a list of free bookings for this room
            yield put({
                type: BookingActionTypes.CREATE_BOOKING_SUCCESS,
                payload: response.data,
            });
        } else {
            yield put({
                type: BookingActionTypes.CREATE_BOOKING_SUCCESS,
                payload: response.data
            });
        }
    } catch (e) {
        yield put({
            type: BookingActionTypes.CREATE_BOOKING_FAIL
        });
    }
}

export function* deleteBookingSaga(action: DeleteBooking) {
    try {
        console.log('DELETE BOOKING idToDelete : ' + action.idToDelete);
        const response: AxiosResponse<void> = yield call(deleteBookingApi, action.idToDelete);
        console.log('response : ');
        console.log(response)
        yield put({
            type: BookingActionTypes.DELETE_BOOKING_SUCCESS,
            payload: response.data
        });
    } catch (e) {
        console.log('DELETE BOOKING FAIL');
        console.log(e);
        yield put({
            type: BookingActionTypes.DELETE_BOOKING_FAIL
        });
    }
}

export default function* () {
    yield all([
        takeLatest(BookingActionTypes.FETCH_BOOKINGS, getBookingsForDateAndRoomSaga),
        takeLatest(BookingActionTypes.CREATE_BOOKING, createBookingSaga),
        takeLatest(BookingActionTypes.DELETE_BOOKING, deleteBookingSaga),
    ]);
}