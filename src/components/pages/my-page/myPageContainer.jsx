import PropTypes from 'prop-types';
import {updateNewPostActionCreater, addPostActionCreater} from '../../../redux/reducers/my-posts-reducer.js';
import MyPage from "./myPage.jsx";

function MyPageContainer({myPosts, postValue, dispatch}) {

  const updateValuePostDispatch = (ref) => dispatch(updateNewPostActionCreater(ref.current.value));
  const addValuePostDispatch = () => dispatch(addPostActionCreater());
  return (<MyPage
        updateValuePostDispatch={updateValuePostDispatch}
        myPosts={myPosts}
        dispatch={dispatch}
        postValue={postValue}
        addValuePostDispatch = {addValuePostDispatch}
      />
  )
}

MyPageContainer.propTypes = {
  myPosts: PropTypes.array,
  id: PropTypes.number,
  text: PropTypes.string,
  time: PropTypes.string,
  getMyPostItems: PropTypes.func,
  dispatch: PropTypes.func,
  postValue: PropTypes.string,
};

export default MyPageContainer;
