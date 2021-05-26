import _ from "lodash";
import { RoomAction, RoomActionTypes } from "../actions/RoomActions";
import { Reducer } from "redux";
import { RoomState } from "../states/RoomState";

const initialState = {
    items: {},
    name: '',
    creationStatus: false,
    loading: false,
    error: null
};

export const RoomReducer: Reducer<RoomState, RoomAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case RoomActionTypes.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM:
            return {
                ...state,
                name: state.name,
                creationStatus: false,
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM_SUCCESS:
            return {
                ...state,
                name: state.name,
                creationStatus: true,
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM_FAIL:
            return {
                ...state,
                name: state.name,
                creationStatus: false,
                loading: false,
            };

        default:
            return state;
    }
};