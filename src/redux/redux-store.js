import {combineReducers, legacy_createStore as createStore} from "redux";

import dialogsReducer from "./reducers/dialogs-reducer.js";
import myPostsReducer from "./reducers/my-posts-reducer.js";
import usersReducer from "./reducers/users-reducer.js";

let reducers = combineReducers({
  dialogsData: dialogsReducer,
  myPosts: myPostsReducer,
  users: usersReducer
});


let storeRedux = createStore(reducers);

export default storeRedux;
