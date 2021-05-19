import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { UserReducer } from "../reducers/UserReducer";
import { RoomReducer } from "../reducers/RoomReducer";
import { BookingReducer } from "../reducers/BookingReducer";
import { UserAction } from "../actions/UserActions";
import { RoomAction } from "../actions/RoomActions";
import { BookingAction } from "../actions/BookingActions";
import { initSagas } from '../sagas/RootSaga';
import { CreateUserState, UserState } from "../states/UserState";
import { CreateRoomState, RoomState } from "../states/RoomState";
import { BookingState } from "../states/BookingState";

export interface RootState {
    readonly user: UserState;
    readonly room: RoomState;
    readonly booking: BookingState;
}

const rootReducer = combineReducers<RootState>({
    user : UserReducer,
    room: RoomReducer,
    booking: BookingReducer
});

export type RootActions = UserAction | RoomAction | BookingAction;

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