import { getRandomArbitrary } from "../dialogsData";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";

const myPostsReducer = (state, action) => {
    let newPost = { id: getRandomArbitrary(1, 10000), text: state.postValue, time: "12 : 12" };
    switch (action.type) {
        case UPDATE_NEW_POST:
            state.postValue = action.newPost;
            return state;
        case ADD_POST:
            state.posts.push(newPost);
            state.postValue = "";
            return state;
        default:
            return state;
    }
}

export default myPostsReducer;