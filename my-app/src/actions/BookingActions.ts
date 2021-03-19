import { Booking } from '../domain/Booking'

//Commands to winteract with state
export enum BookingActionTypes {
    FETCH_BOOKINGS = "BOOKINGS",
    FETCH_BOOKINGS_SUCCESS = "FETCH_BOOKINGS_SUCCESS",
    FETCH_BOOKINGS_FAIL = "FETCH_BOOKINGS_FAIL",
    CREATE_BOOKING = "CREATE_BOOKING",
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

interface CreateBooking {
    type: BookingActionTypes.CREATE_BOOKING;
    bookingToCreate: Booking;
}

export const fetchBookingsForDateAndRoom = (idRoom: number, date: Date): FetchBookings => ({
    type: BookingActionTypes.FETCH_BOOKINGS,
    idRoom: idRoom,
    date: date,
});

export const createBooking = (bookingToCreate: Booking): CreateBooking => ({
    type: BookingActionTypes.CREATE_BOOKING,
    bookingToCreate: bookingToCreate,
});

export type BookingAction =
    | FetchBookings
    | FetchBookingsSuccess
    | FetchBookingsFail
    | CreateBooking;