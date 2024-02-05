import PropTypes from 'prop-types';
import {
    DialogsWrapper, DialogsList, DialogsLink, DialogsItem, DialogsItemIcons,
    InputButtonWrapper, MessageInputField, MessagesubmitButton, InputFile
} from './style';
import RenderMessages from './renderMessages';

function Dialogs({ dialogsData, addMessage }) {

    Dialogs.propTypes = {
        addMessage: PropTypes.func.isRequired,
        dialogsData: PropTypes.array,
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
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
            <RenderMessages dialogsData={dialogsData}/>
            <InputButtonWrapper>
                <InputFile />
                <MessageInputField placeholder='Введите ваше сообщение'></MessageInputField>
                <MessagesubmitButton onClick={addMessage} />
            </InputButtonWrapper>
        </DialogsWrapper>
    )
}


export default Dialogs;