import Axios from "../api";
import { LOADING, SET_ALERT, REMOVE_ALERT, REGISTER, QUEUE_CREATE, QUEUE_JOIN } from "./constants";
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
    createQueue: async (queue) => {
      dispatch({ type: LOADING });
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const { data } = await Axios.post("/queue/create", queue, {
          headers: { Authorization: `Bearer ${token}` }
        });
        dispatch({ type: QUEUE_CREATE, payload: data });
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
    joinQueue: async (queueId) => {
      dispatch({ type: LOADING });
      try {
        const token = JSON.parse(localStorage.getItem("user"))?.token;
        const { data } = await Axios.post(
          "/queue/join",
          { _id: queueId },
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );
        dispatch({ type: QUEUE_JOIN, payload: data });
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
    }
  };
};

export default getActions;
