import React from 'react';
import PropTypes from 'prop-types';
import {
    DialogsWrapper, DialogsList, DialogsLink, DialogsItem, DialogsItemIcons,
    InputButtonWrapper, MessageInputField, MessagesubmitButton, InputFile
} from './style';
import RenderMessages from './renderMessages';

function Dialogs({ dialogsData, addMessage, messageValue, updateNewMessage }) {

    Dialogs.propTypes = {
        addMessage: PropTypes.func,
        updateNewMessage: PropTypes.func,
        dialogsData: PropTypes.array,
        messageValue: PropTypes.string,
        id: PropTypes.number,
        name: PropTypes.string,
    }

    let postElenemt = React.createRef();

    function updateValue() {
        updateNewMessage(postElenemt.current.value);
    }
    function added() {
        addMessage(postElenemt.current.value, dialogsData);
        postElenemt.current.focus();
    }

    function addOfkey(e) {
        if (e.keyCode == 13 && e.shiftKey) {
            e.preventDefault();
            added()
        }
    }

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
                <MessageInputField ref={postElenemt} onChange={updateValue} value={messageValue} onKeyDown={addOfkey} placeholder='Введите ваше сообщение'></MessageInputField>
                <MessagesubmitButton onClick={added} />
            </InputButtonWrapper>
        </DialogsWrapper>
    )
}

export default Dialogs;