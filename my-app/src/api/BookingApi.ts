import client from "../api";
import { AxiosResponse } from "axios";
import { Booking } from "../domain/Booking";

export const fetchBookingsForDateAndRoomApi: (roomId: number, date: Date) => Promise<AxiosResponse<Booking[]>> = (roomId, date) => client.get("/Bookings?idRoom=" + roomId/*1*/ + "&date=" +/*new Date('2021-03-04').toISOString()*/ date.toISOString());
export const createBookingApi: (bookingToCreate: Booking) => Promise<AxiosResponse<JSON>> = (bookingToCreate) => client.post("/Bookings", { id: '0', roomId: bookingToCreate.roomId, userId: bookingToCreate.userId, startSlot: bookingToCreate.startSlot, endSlot: bookingToCreate.endSlot, date: bookingToCreate.date });
export const deleteBookingApi: (idToDelete: number) => Promise<AxiosResponse<void>> = (idToDelete) => client.delete("/Bookings?id=" + idToDelete);