import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
// import { subscribe } from './mocks/dialogsData';
import store from './mocks/dialogsData';

let root =  ReactDOM.createRoot(document.getElementById('root'));

function rerender() {
    root.render(
        <React.StrictMode>
            <App dialogsData={store.getState().dialogs.dialogsData} addMessage={store.getState().dialogs.addMessage.bind(store)} messageValue={store.getState().dialogs.messageValue} updateNewMessage={store.getState().dialogs.updateNewMessage.bind(store)}/>
        </React.StrictMode>,
    )
}

rerender(store.getState());

store.subscribe(rerender);
