import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const POST_SMURF = "POST_SMURF";
export const POST_SMURF_FAIL = "POST_SMURF_FAIL";

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Data from API:", res.data);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            console.log("this is the error", err)
            dispatch({ type: FETCH_SMURFS_FAIL, payload: err.response })
        })
}

export const postSmurf = () => dispatch => {
    dispatch({ type: POST_SMURF });
    axios
        .post("http://localhost:3333/smurfs")
        .then(res => {
            console.log("Post axios call:", res.data)
            dispatch({ type: POST_SMURF, payload: res.data })
        })
        .catch(err => {
            console.log("this is the error", err)
            dispatch({ type: POST_SMURF_FAIL, payload: err.response })
        })
}