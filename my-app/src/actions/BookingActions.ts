import { Booking } from '../domain/Booking'

//Commands to winteract with state
export enum BookingActionTypes {
    FETCH_BOOKINGS = "BOOKINGS",
    FETCH_BOOKINGS_SUCCESS = "FETCH_BOOKINGS_SUCCESS",
    FETCH_BOOKINGS_FAIL = "FETCH_BOOKINGS_FAIL",
    CREATE_BOOKING = "CREATE_BOOKING",
    CREATE_BOOKING_SUCCESS = "CREATE_BOOKING_SUCCESS",
    CREATE_BOOKING_FAIL = "CREATE_BOOKING_FAIL",
    DELETE_BOOKING = "DELETE_BOOKING",
    DELETE_BOOKING_SUCCESS = "DELETE_BOOKING_SUCCESS",
    DELETE_BOOKING_FAIL = "DELETE_BOOKING_FAIL",
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

export interface CreateBooking {
    type: BookingActionTypes.CREATE_BOOKING;
    bookingToCreate: Booking;
}

interface CreateBookingSuccess {
    type: BookingActionTypes.CREATE_BOOKING_SUCCESS;
    payload: Booking;
}

interface CreateBookingFail {
    type: BookingActionTypes.CREATE_BOOKING_FAIL;
}

export interface DeleteBooking {
    type: BookingActionTypes.DELETE_BOOKING;
    idToDelete: number;
}

interface DeleteBookingSuccess {
    type: BookingActionTypes.DELETE_BOOKING_SUCCESS;
}

interface DeleteBookingFail {
    type: BookingActionTypes.DELETE_BOOKING_FAIL;
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

export const deleteBooking = (idToDelete: number): DeleteBooking => ({
    type: BookingActionTypes.DELETE_BOOKING,
    idToDelete: idToDelete,
});

export type BookingAction =
    | FetchBookings
    | FetchBookingsSuccess
    | FetchBookingsFail
    | CreateBooking
    | CreateBookingSuccess
    | CreateBookingFail
    | DeleteBooking
    | DeleteBookingSuccess
    | DeleteBookingFail;