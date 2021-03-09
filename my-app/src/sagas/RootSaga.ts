import Room from "./RoomSaga";

const sagas = [
    Room
];

export const initSagas = (sagaMiddleware: any) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));