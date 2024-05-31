// import React from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
    DialogsWrapper, DialogsList, DialogsLink, DialogsItem, DialogsItemIcons,
    InputButtonWrapper, MessageInputField, MessagesubmitButton, InputFile, Notification
} from './style';
import RenderMessages from './renderMessages';

function Dialogs({ dialogsData, messageValue, updateValueDispatch, addMessageDispatch }) {

    const textareaElement = useRef();

    const updateValue = () => updateValueDispatch(textareaElement.current.value);

    function added() {
        addMessageDispatch();
        textareaElement.current.focus();
    }

    const addOfkey = (e) => {
        if (e.keyCode == 13 && e.shiftKey) {
            e.preventDefault();
            added();
        }
    };

    let dialogList = dialogsData.map(prop =>
        <DialogsLink to={`/dialogs/${prop.id}`} key={prop.id} >
            <DialogsItemIcons src={prop.foto} />
            <DialogsItem >{prop.name}</DialogsItem>
        </DialogsLink>
    );

    return (
        <DialogsWrapper>
            <Notification style={{display: "none"}}>Выберите диалог и начните общение</Notification>
            <DialogsList>
                {dialogList}
            </DialogsList>
            <RenderMessages dialogsData={dialogsData} />
            <InputButtonWrapper>
                <InputFile />
                <MessageInputField
                    ref={textareaElement}
                    onChange={updateValue}
                    value={messageValue}
                    onKeyDown={addOfkey}
                    placeholder='Введите ваше сообщение. (Отправка сообщения Shift+Enter)'
                />
                <MessagesubmitButton click={added} />
            </InputButtonWrapper>
        </DialogsWrapper>
    )
}

Dialogs.propTypes = {
    dispatch: PropTypes.func,
    addMessage: PropTypes.func,
    updateNewMessage: PropTypes.func,
    dialogsData: PropTypes.array,
    messageValue: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    updateValueDispatch: PropTypes.func,
    addMessageDispatch: PropTypes.func
}

export default Dialogs;
