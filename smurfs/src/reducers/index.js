import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, POST_DATA_START, POST_DATA_SUCCESS, POST_DATA_FAIL} from '../actions';

const initialState = {
    isFetching: false,
    smurfs: [],
    error: null,
    isAdding: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_START:
            return {
                ...state,
                isFetching: true,
                smurfs: [],
                error: null,
                isAdding: false
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
                error: null,
                isAdding: false
            }
        case FETCH_DATA_FAIL: 
            return {
                ...state,
                isFetching: false,
                smurfs: [],
                error: action.payload,
                isAdding: false
            }
        case POST_DATA_START: 
            return {
                ...state,
                isFetching: false,
                smurfs: [],
                error: null,
                isAdding: true
            }
        case POST_DATA_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, action.payload],
                error: null,
                isAdding: false
            }
        case POST_DATA_FAIL: 
            return {
                ...state,
                isFetching: false,
                smurfs: [],
                error: action.payload,
                isAdding: false
            }
        default:
            return state
    }
}