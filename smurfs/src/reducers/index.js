import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from '../actions';

const initialState = {
    isFetching: false,
    smurfs: [],
    error: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                smurfs: [],
                error: null
            }
        default:
            return state
    }
}