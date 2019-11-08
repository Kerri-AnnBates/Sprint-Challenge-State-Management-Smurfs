import axios from 'axios';

export const FETCH_DATA_START = 'FETCH_DATA_START';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAIL = 'FETCH_DATA_FAIL';

export const fetchSmurfs = () => dispatch => {
    dispatch({type: FETCH_DATA_START});

    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res.data);
            dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data});
        })
        .catch(error => {
            dispatch({type: FETCH_DATA_FAIL, payload: error});
        })
}
