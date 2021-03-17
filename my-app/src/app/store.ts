import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { RoomReducer } from "../reducers/RoomReducer";
import { BookingReducer } from "../reducers/BookingReducer";
import { RoomAction } from "../actions/RoomActions";
import { BookingAction } from "../actions/BookingActions";
import { initSagas } from '../sagas/RootSaga';
import { CreateRoomState, RoomState } from "../states/RoomState";
import { BookingState } from "../states/BookingState";

export interface RootState {
    readonly room: RoomState;
    readonly booking: BookingState;
}

const rootReducer = combineReducers<RootState>({
    room: RoomReducer,
    booking: BookingReducer
});

export type RootActions = RoomAction | BookingAction;

const sagaMiddleware = createSagaMiddleware();

export const store = (): any => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(sagaMiddleware)
        )
    );
    initSagas(sagaMiddleware);
    return store;
};