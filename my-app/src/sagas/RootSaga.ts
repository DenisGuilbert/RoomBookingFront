import Room from "./RoomSaga";
import Booking from "./BookingSaga";

const sagas = [
    Room,
    Booking
];

export const initSagas = (sagaMiddleware: any) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));