import client from "../api";
import { AxiosResponse } from "axios";
import { Booking } from "../domain/Booking";

//export const fetchBookingsForDateAndRoom: (roomId: number, date: Date) => Promise<AxiosResponse<Booking[]>> = (roomId, date) => client.post("/Bookings", { roomId: roomId, date: date.toISOString() });

export const fetchBookingsForDateAndRoom: (roomId: number, date: Date) => Promise<AxiosResponse<Booking[]>> = (roomId, date) => client.get("/Bookings?idRoom=" + roomId + "&date=" + date.toISOString());
//export const createBooking: (roomId: number, userId: number, startSlot: number, endSlot: number, date: Date) => Promise<AxiosResponse<void>> = (roomId, userId, startSlot, endSlot, date) => client.post("/Bookings", { id: '0', name: name });