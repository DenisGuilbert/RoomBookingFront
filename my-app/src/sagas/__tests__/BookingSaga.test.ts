import { runSaga } from 'redux-saga';
import { getRoomsSaga } from "../RoomSaga";
import * as api from "../../api/RoomApi";
import { Room } from "../../domain/Room";
import { RoomActionTypes } from "../../actions/RoomActions";
import { AxiosResponse } from "axios";


test("should fetch rooms and dispatch success action", async () => {
  //Mock objects
    const values: Room[] = [{ id: 1, name: "My Room 1" }];
    const response: AxiosResponse<Room[]> = {
      data: values, status: 200, statusText: "", config: {}, headers: "", request: "" };
    const fetchRooms = jest.spyOn(api, "fetchRooms")
      .mockImplementation(() => Promise.resolve(response));
    const dispatched = [];

    //?
    /*await runSaga({
      dispatch: (act) => dispatched.push(act),
    }, getRoomsSaga);*/

    const successAction = {
      type: RoomActionTypes.FETCH_ROOMS_SUCCESS,
      payload: values
    }; 

    expect(fetchRooms).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([successAction]);
    fetchRooms.mockClear();
});

/*test("should create room and dispatch success action", async () => {
  //Mock objects
    const values: Room[] = [{ id: 1, name: "My Room 1" }];
    const response: AxiosResponse<void> = {
      data: null, status: 200, statusText: "", config: {}, headers: "", request: "" };
    const createRoom = jest.spyOn(api, "createRoom")
      .mockImplementation(() => Promise.resolve(response));
    const dispatched = [];

    //?
    await runSaga({
      dispatch: (act) => dispatched.push(act),
    }, createRoom);

    const successAction = {
      type: RoomActionTypes.CREATE_ROOM_SUCCESS,
    }; 

    expect(createRoom).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([successAction]);
    createRoom.mockClear();
});*/