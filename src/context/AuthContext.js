import AsyncStorage from "@react-native-async-storage/async-storage";
// import * as RootNavigation from "../navigation/navigationRef";

import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";


const authReducer = (state, actions) => {
  switch (actions.type) {
    case "add_error":
      return { ...state, errMsg: actions.payload };
    case "sign_up":
      return { token: actions.payload.token, errMsg: "" };
    default:
      return state;
  }
};

const signUp =
  (dispatch) =>
  async ({ email, password }, callback) => {
    try {
      const response = await trackerApi.post("/signup", { email, password });
      const token = response.data.token;
      await AsyncStorage.setItem("token", token);
      dispatch({ type: "sign_up", payload: { token } });
      //   RootNavigation.navigate('MainFlowTabNavigator');
      if(callback) callback();
      console.log("Navigated to new flow");
    } catch (err) {
      console.log(err.response.data);
      dispatch({
        type: "add_error",
        payload: "Sign up failed. Please try again later",
      });
    }
  };

const signIn = (dispatch) => {
  return ({ email, password }) => {
    // make API request to sing in
    // on success, log in the user
    // on failure, reflect error screen
  };
};

const signOut = (dispatch) => {
  return () => {
    // sign out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, signIn, signOut },
  { token: null, errMsg: "" }
);
