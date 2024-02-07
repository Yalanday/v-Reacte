// import React from 'react';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import {
    DialogsWrapper, DialogsList, DialogsLink, DialogsItem, DialogsItemIcons,
    InputButtonWrapper, MessageInputField, MessagesubmitButton, InputFile
} from './style';
import RenderMessages from './renderMessages';
import { addMessageActionCreater, updateNewMessageActionCreater } from '../../../mocks/dialogsData';


function Dialogs({ dialogsData, messageValue, dispatch }) {

    Dialogs.propTypes = {
        dispatch: PropTypes.func,
        addMessage: PropTypes.func,
        updateNewMessage: PropTypes.func,
        dialogsData: PropTypes.array,
        messageValue: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
    }
    const textareaElement = useRef();

    const updateValue = () => dispatch(updateNewMessageActionCreater(textareaElement.current.value));

    const added = () => {
        dispatch(addMessageActionCreater());
        textareaElement.current.focus();
    };

    const addOfkey = (e) => {
        if (e.keyCode == 13 && e.shiftKey) {
            e.preventDefault();
            added();
        }
    };

    let dialogList = dialogsData.map(prop =>
        <DialogsLink to={`/dialogs/${prop.id}`} key={prop.id}>
            <DialogsItemIcons />
            <DialogsItem>{prop.name}</DialogsItem>
        </DialogsLink>
    );

    return (
        <DialogsWrapper>
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
                    placeholder='Введите ваше сообщение'
                />
                <MessagesubmitButton click={added} />
            </InputButtonWrapper>
        </DialogsWrapper>
    )
}

export default Dialogs;