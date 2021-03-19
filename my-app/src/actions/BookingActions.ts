import { Booking } from '../domain/Booking'

//Commands to winteract with state
export enum BookingActionTypes {
    FETCH_BOOKINGS = "BOOKINGS",
    FETCH_BOOKINGS_SUCCESS = "FETCH_BOOKINGS_SUCCESS",
    FETCH_BOOKINGS_FAIL = "FETCH_BOOKINGS_FAIL",
}

export interface FetchBookings {
    type: BookingActionTypes.FETCH_BOOKINGS;
    idRoom: number;
    date: Date;
}

interface FetchBookingsSuccess {
    type: BookingActionTypes.FETCH_BOOKINGS_SUCCESS;
    payload: Booking;
}

interface FetchBookingsFail {
    type: BookingActionTypes.FETCH_BOOKINGS_FAIL;
}

export const fetchBookingsForDateAndRoom = (idRoom: number, date: Date): FetchBookings => ({
    type: BookingActionTypes.FETCH_BOOKINGS,
    idRoom: idRoom,
    date: date,
});

export type BookingAction =
    | FetchBookings
    | FetchBookingsSuccess
    | FetchBookingsFail;