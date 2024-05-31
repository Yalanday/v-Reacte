import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import storeRedux from "./redux/redux-store.js";

let root = ReactDOM.createRoot(document.getElementById('root'));

function rerender(state) {
  root.render(
      <React.StrictMode>
        <App dialogsData={state.dialogsData.dialogs.dialogsData}
             messageValue={state.dialogsData.dialogs.messageValue}
             dispatch={storeRedux.dispatch}
             myPosts={state.myPosts.posts}
             postValue={state.myPosts.postValue}
        />
      </React.StrictMode>,
  )
}

rerender(storeRedux.getState());


storeRedux.subscribe(() => {
  let newState = storeRedux.getState();
  rerender(newState)
});
