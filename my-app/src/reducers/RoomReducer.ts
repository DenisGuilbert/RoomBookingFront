import _ from "lodash";
import { RoomAction, RoomActionTypes } from "../actions/RoomActions";
import { Reducer } from "redux";
import { RoomState } from "../states/RoomState";

const initialState = {
    items: {},
    loading: false,
    error: null
};

export const RoomReducer: Reducer<RoomState, RoomAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        
        case RoomActionTypes.FETCH_ROOMS_SUCCESS:
            console.log('in reducer, success');
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
