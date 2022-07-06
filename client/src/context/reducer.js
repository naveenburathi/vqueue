/* eslint-disable no-case-declarations */
import {
  REGISTER,
  LOGIN,
  SET_ALERT,
  REMOVE_ALERT,
  QUEUE_CREATE,
  LOADING,
  LOGOUT
} from "./constants";

export const initialState = {
  loading: false,
  isAuth: localStorage.getItem("isAuth") ? JSON.parse(localStorage.getItem("isAuth")) : false,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
  alerts: [],
  queue: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
  isQueueCreated: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case REGISTER:
    case LOGIN:
      const user = {
        _id: action.payload._id,
        token: action.payload.token,
        name: action.payload.name
      };
      localStorage.setItem("isAuth", JSON.stringify(true));
      localStorage.setItem("user", JSON.stringify(user));
      return {
        isAuth: true,
        user: user,
        loading: false
      };
    case SET_ALERT:
      console.log(action.payload);
      const alerts = state.alerts;
      alerts.push(action.payload);
      return {
        ...state,
        alerts
      };
    case LOGOUT:
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
      return { isAuth: false, user: null };

    case REMOVE_ALERT:
      const newAlerts = state.alerts.filter((alert) => alert.id !== action.payload);
      return {
        ...state,
        alerts: newAlerts
      };
    case QUEUE_CREATE:
      const { uuid, name, avgTime, members = [], _id, desc } = action.payload.queue;
      localStorage.setItem("queue", JSON.stringify({ uuid, name, avgTime, members, _id } || {}));
      return {
        ...state,
        queue: { uuid, name, avgTime, members, _id, desc },
        isQueueCreated: true,
        loading: false
      };
  }
  return state;
};

export default reducer;
