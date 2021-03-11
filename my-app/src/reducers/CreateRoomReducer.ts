import _ from "lodash";
import { RoomAction, RoomActionTypes } from "../actions/RoomActions";
import { Reducer } from "redux";
import { CreateRoomState } from "../states/CreateRoomState";

const initialState = {
    items: {},
    loading: false,
    error: null
};

export const CreateRoomReducer: Reducer<CreateRoomState, CreateRoomAction> = (
    state = initialState,
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
            console.log('in reducer,CREATE default');
            return state;
    }
};