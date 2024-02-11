import { MessageItemImg, MessagesItem, MessagesList, MessagesWrapper, TextMessage, TimeMessage } from "./style";
import PropTypes from 'prop-types';
import { Routes, Route } from "react-router-dom";

function RenderMessages({ dialogsData }) {

    RenderMessages.propTypes = {
        dialogsData: PropTypes.array,
        id: PropTypes.number,
        message: PropTypes.string,
        list: PropTypes.array
    }

    const imageChecker = (flag, urlImage) => flag === true ? urlImage : "/src/img/yalanday.jpg";

    let messages = <Routes>{dialogsData.map(item =>
        <Route path={`/${item.id}`} key={item.id} element={<MessagesList key={item.id}>
            {item["list"].map(child =>
                <MessagesItem key={child.id}>
                    <MessageItemImg src={imageChecker(child.opponent, item.foto)} />
                    <div>
                        <TimeMessage dateTime={child.time}>{child.time}</TimeMessage>
                        <TextMessage>{child.message}</TextMessage>
                    </div>
                </MessagesItem>
            )}
        </MessagesList>} />
    )}</Routes>;

    return (
        <MessagesWrapper>
            {messages}
        </MessagesWrapper>
    )
}

export default RenderMessages;
