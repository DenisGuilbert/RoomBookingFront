import _ from "lodash";
import { BookingAction, BookingActionTypes } from "../actions/BookingActions";
import { Reducer } from "redux";
import { BookingState } from "../states/BookingState";
//import { Booking } from '../domain/Booking'

const initialState = {
    items: {},
    freeBookings: {},
    bookingToCreate: { id: 0, roomId: 1, userId: 1, startSlot: 10, endSlot: 17, date: new Date() },
    idRoom: 1,
    date: new Date(),
    creationStatus: false,
    loading: false,
    isBookingCreated: false,
    error: null
};

export const BookingReducer: Reducer<BookingState, BookingAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {

        case BookingActionTypes.FETCH_BOOKINGS:
            return {
                ...state,
                idRoom: state.idRoom,
                date: state.date,
                //creationStatus: false,
                //loading: false
            };
            
        case BookingActionTypes.FETCH_BOOKINGS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                isBookingCreated: true, //todo change that
                loading: false
            };

        case BookingActionTypes.FETCH_BOOKINGS_FAIL:
            return {
                ...state,
                items: {},
                loading: false
            };

        case BookingActionTypes.CREATE_BOOKING:
            console.log('Booking reducer, CREATE booking : ');
            console.log(state.bookingToCreate);
            return {
                ...state,
                bookingToCreate: state.bookingToCreate,
            };

        case BookingActionTypes.CREATE_BOOKING_SUCCESS:
            console.log('Booking reducer, CREATE booking Success : ');
            console.log(action.payload);            
            /*return {
                ...state,
                freeBookings: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };*/
            return {
                ...state,
                freeBookings: { ...state.items, ...action.payload },
                loading: false
            };

        case BookingActionTypes.CREATE_BOOKING_FAIL:
            return {
                ...state,
                items: {},
                loading: false
            };

        default:
            console.log('Booking reducer, default');
            return state;
    }
};