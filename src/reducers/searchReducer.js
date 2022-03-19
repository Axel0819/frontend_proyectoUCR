import { types } from '../types/types';

const initState = {
    q: [], // queryCourse
    hours: [],
    types: [],
    state: []
}

export const searchReducer = ( state=initState, action) => {
    const { type, payload } = action

    switch (type) {

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
    
        default:
            return state;
    }

}