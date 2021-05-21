import _ from "lodash";
import { UserAction, UserActionTypes } from "../actions/UserActions";
import { Reducer } from "redux";
import { UserState } from "../states/UserState";

const initialState = {
    items: {},
    allGenres: {},
    allJobs: {},
    firstName: '',
    lastName: '',
    idGenre: 0,
    idJob: 0,
    creationStatus: false,
    loading: false,
    error: null
};

export const UserReducer: Reducer<UserState, UserAction> = (
    state = initialState,
    action
) => {
    switch (action.type) {

        case UserActionTypes.FETCH_GENRES_SUCCESS:
            return {
                ...state,
                allGenres: { ...state.allGenres, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

            case UserActionTypes.FETCH_JOBS_SUCCESS:
                return {
                    ...state,
                    allJobs: { ...state.allJobs, ..._.mapKeys(action.payload, "id") },
                    loading: false
                };

        case UserActionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                items: { ...state.items, ..._.mapKeys(action.payload, "id") },
                loading: false
            };

        case UserActionTypes.CREATE_USER:
            return {
                ...state,
                lastName: state.lastName,
                firstName: state.firstName,
                idGenre: state.idGenre,
                idJob: state.idJob,
                creationStatus: false,
                loading: false
            };

        case UserActionTypes.CREATE_USER_SUCCESS:
            return {
                ...state,
                lastName: state.lastName,
                firstName: state.firstName,
                idGenre: state.idGenre,
                idJob: state.idJob,
                creationStatus: true,
                loading: false
            };

        case UserActionTypes.CREATE_USER_FAIL:
            return {
                ...state,
                lastName: state.lastName,
                firstName: state.firstName,
                idGenre: state.idGenre,
                idJob: state.idJob,
                creationStatus: false,
                loading: false,
            };

        default:
            return state;
    }
};