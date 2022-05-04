import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //trocando o nome da variavel para formReducer
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
