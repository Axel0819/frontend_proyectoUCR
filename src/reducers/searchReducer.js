import { types } from '../types/types';

// const initState = {
//     q: [], // queryCourse
//     hours: [],
//     types: [],
//     state: [],
// }

export const searchReducer = (state = {}, action) => {
    const { type, payload } = action

    switch (type) {

        case types.searchSetQ:
            return {
                ...state,
                q: [...payload]
            }

        case types.searchSetHours:
            return {
                ...state,
                hours: [...payload]
            }

        case types.searchSetState:
            return {
                ...state,
                state: [...payload]
            }

        case types.searchSetTypes:
            return {
                ...state,
                types: [...payload]
            }

        case types.searchRemoveFilters:
            return {
                ...state,
                hours: [],
                types: [],
                state: []
            }

        default:
            return state;
    }

}