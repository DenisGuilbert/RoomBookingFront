import { Booking } from "../domain/Booking";

export interface Bookings {
    [id: number]: Booking;
}

export interface CreateBooking {
    bookingToCreate: Booking;
}

export interface DeleteBooking {
    idToDelete: number;
}

export interface BookingState {
    items: Bookings;
    freeBookings: Bookings;
    bookingToCreate: Booking;
    isBookingCreated: boolean;
    idToDelete: number;
    deleteStatus: boolean;
    loading: boolean;
    date: Date;
    idRoom: number;
    error: String | null;
    creationStatus: boolean;
}