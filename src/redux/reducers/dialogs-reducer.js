import { getRandomArbitrary } from "../dialogsData";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
    let newMessage = { id: getRandomArbitrary(1, 10000), message: state.messageValue };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.messageValue = action.newMessage;
            return state;
        case ADD_MESSAGE:
            state.dialogsData[0].list.push(newMessage);
            state.messageValue = "";
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;

