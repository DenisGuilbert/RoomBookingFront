import { BookingActionTypes, FetchBookings, CreateBooking } from "../actions/BookingActions";
import { fetchBookingsForDateAndRoomApi, createBookingApi } from "../api/BookingApi";
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
        console.log('BookingSage. Call Axios with parameters : ');
        console.log(action.bookingToCreate);
        const response: AxiosResponse<JSON> = yield call(createBookingApi, action.bookingToCreate);
        console.log('response : ');
        console.log(response);
        if (response.status == 207) {
            console.log('status 207');
            //Here, a booking with the same parameters already exists.
            //Then, the API return a list of free bookings for this room
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
        console.log('catch in booking saga. Error : ');
        console.log(e);
        yield put({
            type: BookingActionTypes.CREATE_BOOKING_FAIL
        });
    }
}

export default function* () {
    yield all([
        takeLatest(BookingActionTypes.FETCH_BOOKINGS, getBookingsForDateAndRoomSaga),
        takeLatest(BookingActionTypes.CREATE_BOOKING, createBookingSaga),
    ]);
}