import { MessagesItem, MessagesList, MessagesWrapper } from "./style";
import PropTypes from 'prop-types';
import props from "/src/mocks/dialogsData";
import { Routes, Route } from "react-router-dom";

props.propTypes = {
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

let messages = <Routes>{props.map(item =>
    <Route path={`/${item.id}`} key={item.id} element={<MessagesList key={item.id}>
        {item["list"].map(child =>
            <MessagesItem key={child.id}>
                {child.message}
            </MessagesItem>
        )}
    </MessagesList>} />
)}</Routes>;

function RenderMessage() {
    return (

       <MessagesWrapper> { messages } </MessagesWrapper>

    )
}

export default RenderMessage;