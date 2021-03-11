import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga"
import { CreateRoomReducer, RoomReducer } from "../reducers/RoomReducer";
import { RoomAction } from "../actions/RoomActions";
import { initSagas } from '../sagas/RootSaga';
import { CreateRoomState, RoomState } from "../states/RoomState";

export interface RootState {
    readonly room: RoomState;
    readonly createRoom: CreateRoomState;
}

const rootReducer = combineReducers<RootState>({
    room: RoomReducer,
    createRoom: CreateRoomReducer
});

export type RootActions = RoomAction;

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