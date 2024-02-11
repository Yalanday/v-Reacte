import { getCurrentTime, getRandomArbitrary } from "../dialogsData";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const dialogsReducer = (state, action) => {
    let newMessage = { id: getRandomArbitrary(1, 10000), message: state.messageValue, time: getCurrentTime().slice(0,-3) };
    let cutter = window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1);

    switch (action.type) {
        case UPDATE_NEW_MESSAGE:
            state.messageValue = action.newMessage;
            return state;
        case ADD_MESSAGE:
            for (let key in state.dialogsData) {
                if (state.dialogsData[key].id == cutter) state.dialogsData[key].list.push(newMessage)
            }
            state.messageValue = "";
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;
