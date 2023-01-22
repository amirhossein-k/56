import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
import { detailCreateReducer } from "./reducers/detailReducer";
import {
  productCreateReducer,
  productListReducer,
  productDeleteReducer,
  productUpdateReducer,
  productGetReducer,
} from "./reducers/productReducer";

const middleware = [thunk];
///////
const reducer = combineReducers({
  userLogin: userLoginReducer,
  uerRegister: userRegisterReducer,
  productCreate: productCreateReducer,
  productList: productListReducer,
  productDelete: productDeleteReducer,
  productUpdate: productUpdateReducer,
  productGet: productGetReducer,
  detailGet: detailCreateReducer,
});
////////////
const userInformStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
//////////////
const initialState = {
  userLogin: { userInfo: userInformStorage },
};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
