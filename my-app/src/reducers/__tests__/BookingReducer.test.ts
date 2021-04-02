import { BookingReducer } from "../BookingReducer";
import { BookingActionTypes } from "../../actions/BookingActions";

test("should handle FETCH_BOOKINGS", () => {
    const dateTest = new Date('2020/03/03');
    expect(
        BookingReducer({
            items: {},
            freeBookings: {},
            bookingToCreate: { id: 0, roomId: 1, userId: 1, startSlot: 10, endSlot: 17, date: dateTest },
            idRoom: 1,
            date: dateTest,
            creationStatus: false,
            loading: false,
            isBookingCreated: false,
            idToDelete: 0,
            deleteStatus: false,
            error: null
        }, {
            type: BookingActionTypes.FETCH_BOOKINGS,
            date: dateTest,
            idRoom: 1,
        })
    ).toEqual(
        {
            items: {},
            freeBookings: {},
            bookingToCreate: { id: 0, roomId: 1, userId: 1, startSlot: 10, endSlot: 17, date: dateTest },
            idRoom: 1,
            date: dateTest,
            creationStatus: false,
            loading: false,
            isBookingCreated: false,
            idToDelete: 0,
            deleteStatus: false,
            error: null
        }
    )
});

test("should handle CREATE_BOOKING", () => {
    const dateTest = new Date('2020/03/03');
    const bookingToCreateTest = { id: 0, roomId: 1, userId: 1, startSlot: 10, endSlot: 17, date: dateTest };
    expect(
        BookingReducer({
            items: {},
            freeBookings: {},
            bookingToCreate: bookingToCreateTest,
            idRoom: 1,
            date: dateTest,
            creationStatus: false,
            loading: false,
            isBookingCreated: false,
            idToDelete: 0,
            deleteStatus: false,
            error: null
        }, {
            type: BookingActionTypes.CREATE_BOOKING,
            bookingToCreate: bookingToCreateTest,
        })
    ).toEqual(
        {
            items: {},
            freeBookings: {},
            bookingToCreate: bookingToCreateTest,
            idRoom: 1,
            date: dateTest,
            creationStatus: false,
            loading: false,
            isBookingCreated: false,
            idToDelete: 0,
            deleteStatus: false,
            error: null
        }
    )
});