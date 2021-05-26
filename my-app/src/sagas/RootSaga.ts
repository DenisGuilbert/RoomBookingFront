import Room from "./RoomSaga";
import Booking from "./BookingSaga";
import User from "./UserSaga";

const sagas = [
    Room,
    Booking,
    User
];

export const initSagas = (sagaMiddleware: any) =>
    sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));