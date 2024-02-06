import { MessagesItem, MessagesList, MessagesWrapper } from "./style";
import PropTypes from 'prop-types';
import { Routes, Route } from "react-router-dom";

function RenderMessages( { dialogsData}) {

    RenderMessages.propTypes = {
        dialogsData: PropTypes.array,
        id: PropTypes.number,
        message: PropTypes.string,
        list: PropTypes.array
    }
    
    let messages = <Routes>{dialogsData.map(item =>
        <Route path={`/${item.id}`} key={item.id} element={<MessagesList key={item.id}>
            {item["list"].map(child =>
                <MessagesItem key={child.id}>
                    {child.message}
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