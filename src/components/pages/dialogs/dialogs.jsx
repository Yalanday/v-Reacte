import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    DialogsWrapper, DialogsList, DialogsItem, MessagesWrapper,
    InputButtonWrapper, MessageInputField, MessagesubmitButton
} from './style';
import props from "/src/mocks/dialogsData";
import RenderMessage from './messageItem';

props.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

let dialogList = props.map(prop =>
    <DialogsItem key={prop.id}>
        <Link to={`/dialogs/${prop.id}`}>{prop.name}</Link>
    </DialogsItem>
);

function Dialogs() {

    return (
        <DialogsWrapper>

            <DialogsList>
                {dialogList}
            </DialogsList>


            <RenderMessage />


            <InputButtonWrapper>
                <MessageInputField placeholder='Введите ваше сообщение'></MessageInputField>
                <MessagesubmitButton />
            </InputButtonWrapper>
        </DialogsWrapper>
    )
}

export default Dialogs;