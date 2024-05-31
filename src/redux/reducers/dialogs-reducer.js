import {getCurrentTime, getRandomArbitrary} from "../dialogsDataS.js";
import {dataBase} from "../../db.js";

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let initialState = dataBase;
const dialogsReducer = (state = initialState, action) => {
  let newMessage = {id: getRandomArbitrary(1, 10000), message: state.dialogs.messageValue, time: getCurrentTime().slice(0, -3)};
  let cutter = window.location.pathname.slice(window.location.pathname.lastIndexOf("/") + 1);

  switch (action.type) {
    case UPDATE_NEW_MESSAGE:
      state.dialogs.messageValue = action.newMessage;
      return state;
    case ADD_MESSAGE:
      for (let key in state.dialogs.dialogsData) {
        if (state.dialogs.dialogsData[key].id == cutter) {
          state.dialogs.dialogsData[key].list.push(newMessage)
        }
      }
      state.dialogs.messageValue = "";
      return state;
    default:
      return state;
  }
}

export const addMessageActionCreater = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreater = (string) => ({type: UPDATE_NEW_MESSAGE, newMessage: string});

export default dialogsReducer;
