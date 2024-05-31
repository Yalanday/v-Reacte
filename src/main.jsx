import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import storeRedux from "./redux/redux-store.js";

let root = ReactDOM.createRoot(document.getElementById('root'));

function rerender(state) {
  root.render(
      <React.StrictMode>
        <App props={state} dispatch={storeRedux.dispatch}/>
      </React.StrictMode>,
  )
}

rerender(storeRedux.getState());

storeRedux.subscribe(() => {
  let newState = storeRedux.getState();
  rerender(newState)
});
