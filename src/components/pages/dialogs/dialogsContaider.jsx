// import React from 'react';
// import PropTypes from 'prop-types';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../../redux/reducers/dialogs-reducer.js';
import Dialogs from "./dialogs.jsx";
// import StoreContext from "../../../store-context.js";
// import {addPostActionCreater, updateNewPostActionCreater} from "../../../redux/reducers/my-posts-reducer.js";
import {connect} from "react-redux";
// import MyPage from "../my-page/myPage.jsx";

// function DialogsContainer({dispatch}) {
//
//   const updateValueDispatch = (ref) => dispatch(updateNewMessageActionCreater(ref));
//   const addMessageDispatch = () => dispatch(addMessageActionCreater());
//
//   return (
//       <StoreContext.Consumer>
//         {
//           value => (
//               <Dialogs
//                   dialogsData={value.dialogsData.dialogs.dialogsData}
//                   messageValue={value.dialogsData.dialogs.messageValue}
//                   updateValueDispatch={updateValueDispatch}
//                   addMessageDispatch={addMessageDispatch}
//               />
//           )}
//       </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsData.dialogs.dialogsData,
    messageValue: state.dialogsData.dialogs.messageValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateValueDispatch : (ref) => dispatch(updateNewMessageActionCreater(ref)),
    addMessageDispatch : () => dispatch(addMessageActionCreater())
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



// DialogsContainer.propTypes = {
//   dispatch: PropTypes.func,
//   addMessage: PropTypes.func,
//   updateNewMessage: PropTypes.func,
//   dialogsData: PropTypes.array,
//   messageValue: PropTypes.string,
//   id: PropTypes.number,
//   name: PropTypes.string,
//   updateValueDispatch: PropTypes.func,
//   addMessageDispatch: PropTypes.func
// }
export default DialogsContainer;
