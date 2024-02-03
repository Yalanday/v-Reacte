import {
    DialogsWrapper, DialogsList, DialogsItem, MessagesWrapper,
    MessagesList, MessagesItem, MessageInputField, MessagesubmitButton
} from './style';

function Dialogs() {
    return (
        <DialogsWrapper>
            <DialogsList>
                <DialogsItem>Petr</DialogsItem>
                <DialogsItem>Makar</DialogsItem>
                <DialogsItem>Zahar</DialogsItem>
                <DialogsItem>Abubakar</DialogsItem>
            </DialogsList>
            <MessagesWrapper>
                <MessagesList>
                    <MessagesItem>Как дела?</MessagesItem>
                    <MessagesItem>Сойдет. Сам как?</MessagesItem>
                    <MessagesItem>Тоже ничего</MessagesItem>
                    <MessagesItem>ПОнятно</MessagesItem>
                </MessagesList>
                <MessageInputField placeholder='Введите ваше сообщение'></MessageInputField>
                <MessagesubmitButton>Отправить</MessagesubmitButton>
            </MessagesWrapper>
        </DialogsWrapper>
    )
}

export default Dialogs;