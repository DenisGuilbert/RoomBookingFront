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
            console.log('Booking reducer, Fetch.');
            console.log('Parameters : idRoom : ' + state.idRoom + ', date : ' + state.date);
            return {
                ...state,
                idRoom: state.idRoom,
                date: state.date,
                //creationStatus: false,
                //loading: false
            };

        case BookingActionTypes.FETCH_BOOKINGS_SUCCESS:
            console.log('Booking reducer, Fetch Success');
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

            case BookingActionTypes.FETCH_BOOKINGS_FAIL:
            console.log('Booking reducer, Fetch Fail. State : ');
            console.log(state);
            return {
                ...state,
                items: { },
                loading: false
            };

        default:
            console.log('Booking reducer, default');
            return state;
    }
};