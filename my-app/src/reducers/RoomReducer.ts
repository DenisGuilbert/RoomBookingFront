import _ from "lodash";
import { RoomAction, RoomActionTypes } from "../actions/RoomActions";
import { Reducer } from "redux";
import { RoomState } from "../states/RoomState";

const initialState = {
    items: {},
    name: '',
    loading: false,
    error: null
};

export const RoomReducer: Reducer<RoomState, RoomAction> = (
    state = initialState,
    action
) => {

    console.log('RoomReducer. action.type : ' + action.type);

    switch (action.type) {

        case RoomActionTypes.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM:
            console.log('in reducer, CREATE ROOM');
            return {
                ...state,
                name: state.name,
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM_SUCCESS:
            console.log('in reducer, CREATE ROOM SUCCESS');
            return {
                ...state,
                name: state.name,
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM_FAIL:
            console.log('in reducer, CREATE ROOM SUCCESS');
            return {
                ...state,
                name: state.name,
                loading: false
            };

        default:
            console.log('in reducer, default : ' + action.type);
            return state;
    }
};