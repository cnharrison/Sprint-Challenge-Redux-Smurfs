import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const ADD_SMURF = "ADD_SMURF";
export const GET_SMURFS = "GET_SMURFS";
export const UPDATE_SMURF = "UPDATE_SMURF";
export const DELETE_SMURF = "DELTE_SMURF";

export const FETCHING = "FETCHING";
export const CREATING = "CREATING";
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const addSmurf = smurf => dispatch => {
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(response => {
      dispatch({ type: ADD_SMURF, payload: response.data });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get("http://localhost:3333/smurfs")
    .then(response => {
      dispatch({
        type: GET_SMURFS,
        payload: response.data
      });
    })
    .catch(error => {
      console.log(error);
    });
};
