import _ from "lodash";
import { RoomAction, RoomActionTypes } from "../actions/RoomActions";
import { Reducer } from "redux";
import { RoomState, CreateRoomState } from "../states/RoomState";

const initialState = {
    items: {},
    loading: false,
    error: null
};

const initialStateCreate = {
    name: '',
    loading: false,
    error: null
};

export const RoomReducer: Reducer<RoomState, RoomAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        
        case RoomActionTypes.FETCH_ROOMS_SUCCESS:
            console.log('in reducer, FETCH success');
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

        default:
            console.log('in reducer, default');
            return state;
    }
};

export const CreateRoomReducer: Reducer<CreateRoomState, RoomAction> = (
    
    state = initialStateCreate,
    action
) => {
    switch (action.type) {
        
        case RoomActionTypes.CREATE_ROOM_SUCCESS:
            console.log('in reducer, CREATE success');
            return {
                /*...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false*/
            };

        default:
            console.log('in reducer, default');
            return state;
    }
};