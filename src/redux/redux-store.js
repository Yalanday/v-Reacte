import {combineReducers, legacy_createStore as createStore} from "redux";

import dialogsReducer from "./reducers/dialogs-reducer.js";
import myPostsReducer from "./reducers/my-posts-reducer.js";

let reducers = combineReducers({
  dialogsData: dialogsReducer,
  myPosts: myPostsReducer
});


let storeRedux = createStore(reducers);

export default storeRedux;
