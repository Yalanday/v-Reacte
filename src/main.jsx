import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import './index.css';
import { subscribe } from './mocks/dialogsData';
import state from './mocks/dialogsData';

let root =  ReactDOM.createRoot(document.getElementById('root'));

function rerender() {
    root.render(
        <React.StrictMode>
            <App dialogsData={state.dialogs.dialogsData} addMessage={state.dialogs.addMessage} messageValue={state.dialogs.messageValue} updateNewMessage={state.dialogs.updateNewMessage}/>
        </React.StrictMode>,
    )
}

rerender(state);

subscribe(rerender);