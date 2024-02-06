import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

let root =  ReactDOM.createRoot(document.getElementById('root'));

export function rerender(state) {

    root.render(
        <React.StrictMode>
            <App dialogsData={state.dialogs.dialogsData} addMessage={state.dialogs.addMessage}/>
        </React.StrictMode>,
    )
}
