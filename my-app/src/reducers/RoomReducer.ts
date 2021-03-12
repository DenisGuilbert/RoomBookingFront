import _ from "lodash";
import { RoomAction, RoomActionTypes } from "../actions/RoomActions";
import { Reducer } from "redux";
import { RoomState, CreateRoomState } from "../states/RoomState";

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
                //name: 'ZZZ',
                name: state.name,
                loading: false
            };

        /*case RoomActionTypes.CREATE_ROOM_FAIL:
            return {
                ...state,
                //name: 'ZZZ',
                name: state.name,
                loading: false
            };*/

        default:
            console.log('in reducer, default');
            return state;
    }
};

/*export const CreateRoomReducer: Reducer<CreateRoomState, RoomAction> = (
    state = initialStateCreate,
    action
) => {
    console.log('createroomreducer, state.name : ' + state.name);
    switch (action.type) {

        case RoomActionTypes.CREATE_ROOM:
            console.log('in reducer, CREATE');
            return {
                ...state,
                //name: 'ZZZ',
                name: state.name,
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM_SUCCESS:
            console.log('in reducer, CREATE success');
            return {
                ...state,
                //name: 'ZZZ',
                name: state.name,
                loading: false
            };

        case RoomActionTypes.CREATE_ROOM_FAIL:
            console.log('in reducer, CREATE fail');
            return {
                ...state,
                //name: 'ZZZ',
                name: state.name,
                loading: false
            };

        default:
            console.log('in reducer, CREATE default');
            return state;
    }
};*/