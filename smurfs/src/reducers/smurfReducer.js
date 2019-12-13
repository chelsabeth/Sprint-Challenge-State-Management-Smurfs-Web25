import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  POST_SMURF,
  POST_SMURF_FAIL
} from "../actions";

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: ""
      };
    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
      };
    case POST_SMURF:
        const newSmurf = {
          name: action.payload,
          age: 0,
          height: "",
          id: Date.now()
        };
        return { ...state, smurfs: [...state.smurfs, newSmurf] };
    case POST_SMURF_FAIL:
      return {
        ...state,
        addingSmurf: false,
        error: action.payload,
        fetchingSmurfs: false
      };
    default:
      return state;
  }
};

export default reducer;
