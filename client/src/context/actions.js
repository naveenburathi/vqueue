import Axios from "../api";
import { LOADING, SET_ALERT, REMOVE_ALERT, REGISTER, LOGOUT } from "./constants";
import { v4 as uuid } from "uuid";

const setAlert = (dispatch, msg, alertType, timeout = 2000) => {
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
};

const getActions = (dispatch) => {
  return {
    login: async (user) => {
      dispatch({ type: LOADING });
      try {
        const { data } = await Axios.post("/login", user);
        console.log(data);
        dispatch({ type: REGISTER, payload: data });
      } catch (error) {
        setAlert(
          dispatch,
          error.response.status === 401
            ? "Access Denied"
            : error.response && error.response?.data?.message
            ? error.response?.data?.message
            : error.message,
          "error"
        );
      }
    },
    register: async (user) => {
      dispatch({ type: LOADING });
      try {
        const { data } = await Axios.post("/register", user);
        console.log(data);
        dispatch({ type: REGISTER, payload: data });
      } catch (error) {
        setAlert(
          dispatch,
          error.response.status === 401
            ? "Already Registered"
            : error.response && error.response?.data?.message
            ? error.response?.data?.message
            : error.message,
          "error"
        );
      }
    },
    logout: () => {
      dispatch({ type: LOGOUT });
    }
  };
};

export default getActions;
