import _ from "lodash";
import { BookingAction, BookingActionTypes } from "../actions/BookingActions";
import { Reducer } from "redux";
import { BookingState } from "../states/BookingState";

const initialState = {
    items: {},
    idRoom: 0,
    date: new Date(),
    creationStatus: false,
    loading: false,
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
                creationStatus: false,
                loading: false
            };

        case BookingActionTypes.FETCH_BOOKINGS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

        default:
            return state;
    }
};