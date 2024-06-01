import {getCurrentTime, getRandomArbitrary} from "../dialogsDataS.js";
import {dataBase} from "../../db.js";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

let initialState = dataBase.myPosts;
const myPostsReducer = (state = initialState, action) => {
  let newPost = {id: getRandomArbitrary(1, 10000), text: state.postValue, time: getCurrentTime().slice(0, -3)};
  switch (action.type) {
    case UPDATE_NEW_POST: {
      let stateCopy = {...state};
      stateCopy.postValue = action.newPost;
      return stateCopy;
    }
    case ADD_POST: {
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      stateCopy.postValue = "";
      return stateCopy;
    }
    default:
      return state;
  }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostActionCreater = (string) => ({type: UPDATE_NEW_POST, newPost: string});


export default myPostsReducer;
