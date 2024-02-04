// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    DialogsWrapper, DialogsList, DialogsLink, DialogsItem, DialogsItemIcons,
    InputButtonWrapper, MessageInputField, MessagesubmitButton, InputFile
} from './style';
import props from "/src/mocks/dialogsData";
import RenderMessages from './messageItem';

props.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

let dialogList = props.map(prop =>
    <DialogsLink to={`/dialogs/${prop.id}`} key={prop.id}>
        <DialogsItemIcons />
        <DialogsItem>{prop.name}</DialogsItem>
    </DialogsLink>
);

function Dialogs() {

    return (
        <DialogsWrapper>
            <DialogsList>
                {dialogList}
            </DialogsList>
            <RenderMessages />
            <InputButtonWrapper>
                <InputFile />
                <MessageInputField placeholder='Введите ваше сообщение'></MessageInputField>
                <MessagesubmitButton />
            </InputButtonWrapper>
        </DialogsWrapper>
    )
}

export default Dialogs;