// eslint-disable-next-line no-unused-vars
import React from "react";
import {connect} from "react-redux";
import Users from "./users.jsx";
import {followAC, unfollowAC} from "../../../redux/reducers/users-reducer.js";

let mapStateToProps = (state) => {
  console.log(state)
  return {
    users: state
  }
};

let mapDispathToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId))
    },
    // setUsers: (user) => {
    //   dispatch(setUsersAC())
    // }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Users)
