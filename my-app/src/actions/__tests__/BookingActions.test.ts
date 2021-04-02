import { fetchBookingsForDateAndRoom, BookingActionTypes } from "../BookingActions";

test("should create an action to fetch values", () => {
    const expectedAction = {
      type: BookingActionTypes.FETCH_BOOKINGS,
    }
    expect(fetchBookingsForDateAndRoom()).toEqual(expectedAction)
});