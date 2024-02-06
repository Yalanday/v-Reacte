import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import store from './mocks/dialogsData';

let root = ReactDOM.createRoot(document.getElementById('root'));

function rerender() {
    root.render(
        <React.StrictMode>
            <App dialogsData={
                store.getState().dialogs.dialogsData}
                messageValue={store.getState().dialogs.messageValue}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
    )
}

rerender(store.getState());
store.subscribe(rerender);
