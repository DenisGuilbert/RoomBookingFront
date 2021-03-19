import { Booking } from "../domain/Booking";

export interface Bookings {
    [id: number]: Booking;
}

export interface CreateBooking {
    bookingToCreate: Booking;
}

export interface BookingState {
    items: Bookings;
    bookingToCreate: Booking;
    loading: boolean;
    date: Date;
    idRoom: number;
    error: String | null;
    creationStatus: Boolean;
}