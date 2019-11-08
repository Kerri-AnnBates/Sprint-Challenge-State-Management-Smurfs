import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const POST_DATA_START = 'POST_DATA_START';
export const POST_DATA_SUCCESS = 'POST_DATA_SUCCESS';
export const POST_DATA_FAIL = 'POST_DATA_FAIL';


// Fetch the data.
export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_DATA_START });

    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data });
        })
        .catch(error => {
            dispatch({ type: FETCH_DATA_FAIL, payload: error });
        })
}


// Post the data
export const addSmurf = (smurf) => dispatch => {
    dispatch({ type: POST_DATA_START });
    axios.post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            console.log(res.data);
            dispatch({ type: POST_DATA_SUCCESS, payload: smurf });
        })
        .catch(error => {
            console.log(error);
            dispatch({ type: POST_DATA_FAIL, payload: error });
        })
}