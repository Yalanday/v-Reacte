// import PropTypes from 'prop-types';
import {updateNewPostActionCreater, addPostActionCreater} from '../../../redux/reducers/my-posts-reducer.js';
import MyPage from "./myPage.jsx";
import {connect} from "react-redux";

// function MyPageContainer({dispatch}) {
//   const updateValuePostDispatch = (ref) => dispatch(updateNewPostActionCreater(ref.current.value));
//   const addValuePostDispatch = () => dispatch(addPostActionCreater());
//   return (
//       <StoreContext.Consumer>
//         {
//           (value) => (
//               <MyPage
//                   updateValuePostDispatch={updateValuePostDispatch}
//                   myPosts={value.myPosts.posts}
//                   postValue={value.myPosts.postValue}
//                   addValuePostDispatch={addValuePostDispatch}
//               />
//           )
//         }
//       </StoreContext.Consumer>
//   )
// }

let mapStateToProps = (state) => {
  return {
    myPosts: state.myPosts.posts,
    postValue: state.myPosts.postValue
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateValuePostDispatch: (ref) => {
      dispatch(updateNewPostActionCreater(ref.current.value))
    },
    addValuePostDispatch: () => {
      dispatch(addPostActionCreater())
    }
  }
}

const MyPageContainer = connect(mapStateToProps, mapDispatchToProps)(MyPage);

// MyPageContainer.propTypes = {
//   myPosts: PropTypes.array,
//   id: PropTypes.number,
//   text: PropTypes.string,
//   time: PropTypes.string,
//   getMyPostItems: PropTypes.func,
//   dispatch: PropTypes.func,
//   postValue: PropTypes.string,
//   props: PropTypes.object
// };

export default MyPageContainer;
