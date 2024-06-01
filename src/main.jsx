import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import storeRedux from "./redux/redux-store.js";
import {Provider} from "react-redux";

let root = ReactDOM.createRoot(document.getElementById('root'));

function rerender(state) {
  root.render(
      <React.StrictMode>
        <Provider store={storeRedux} >
          <App />
        </Provider>
      </React.StrictMode>,
  )
}

rerender(storeRedux.getState());

storeRedux.subscribe(() => {
  let state = storeRedux.getState();
  rerender(state)
});
