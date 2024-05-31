// import React from 'react';
import PropTypes from 'prop-types';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../../redux/reducers/dialogs-reducer.js';
import Dialogs from "./dialogs.jsx";

function DialogsContainer({props, dispatch}) {

  const updateValueDispatch = (ref) => dispatch(updateNewMessageActionCreater(ref));
  const addMessageDispatch = () => dispatch(addMessageActionCreater());

  return (<Dialogs
          dialogsData = {props.dialogsData.dialogs.dialogsData}
          messageValue ={props.dialogsData.dialogs.messageValue}
          updateValueDispatch = {updateValueDispatch}
          addMessageDispatch = {addMessageDispatch}
      />
  )
}

DialogsContainer.propTypes = {
  props: PropTypes.object,
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
