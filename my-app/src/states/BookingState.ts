import { Booking } from "../domain/Booking";

export interface Bookings {
    [id: number]: Booking;
}

export interface CreateBooking {
    
}

export interface BookingState {
    items: Bookings;
    loading: boolean;
    date: Date;
    idRoom: number;
    error: String | null;
    creationStatus: Boolean;
}