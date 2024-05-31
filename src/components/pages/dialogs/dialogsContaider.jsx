// import React from 'react';
import PropTypes from 'prop-types';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../../redux/reducers/dialogs-reducer.js';
import Dialogs from "./dialogs.jsx";

function DialogsContainer({dialogsData, messageValue, dispatch}) {

  const updateValueDispatch = (ref) => dispatch(updateNewMessageActionCreater(ref));
  const addMessageDispatch = () => dispatch(addMessageActionCreater());

  return (<Dialogs
          dialogsData = {dialogsData}
          messageValue ={messageValue}
          updateValueDispatch = {updateValueDispatch}
          addMessageDispatch = {addMessageDispatch}
      />
  )
}

DialogsContainer.propTypes = {
  dispatch: PropTypes.func,
  addMessage: PropTypes.func,
  updateNewMessage: PropTypes.func,
  dialogsData: PropTypes.array,
  messageValue: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string,
  updateValueDispatch: PropTypes.func,
  addMessageDispatch: PropTypes.func
}
export default DialogsContainer;
