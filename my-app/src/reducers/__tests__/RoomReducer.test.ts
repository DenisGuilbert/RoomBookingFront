import { RoomReducer } from "../RoomReducer";
import { RoomActionTypes } from "../../actions/RoomActions";

test("should handle FETCH_ROOMS", () => {
    expect(
        RoomReducer({
            items: {},
            name: '',
            creationStatus: false,
            loading: false,
            error: null
        }, {
            type: RoomActionTypes.FETCH_ROOMS
        })
    ).toEqual(
        {
            items: {},
            name: '',
            creationStatus: false,
            loading: false,
            error: null
        }
    )
});

test("should handle CREATE_ROOMS", () => {
    expect(
        RoomReducer({
            items: {},
            name: '',
            creationStatus: false,
            loading: false,
            error: null
        }, {
            type: RoomActionTypes.CREATE_ROOM,
            payload: ""
        })
    ).toEqual(
        {
            items: {},
            name: '',
            creationStatus: false,
            loading: false,
            error: null
        }
    )
});