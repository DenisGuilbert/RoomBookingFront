import { createStore } from 'redux'
import roomReducer from '../reducers/RoomReducer'

const store = createStore(roomReducer)

export default store