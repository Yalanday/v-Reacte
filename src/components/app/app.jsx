import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import MyComponents from "../pages/my-components/myComponents";
import MyPage from "../pages/my-page/myPage";
import { PageWrapper, StyledFooter, StyledHeader, StyledMain, StyledNavWrapper } from "./style";
import StartPage from "../pages/start-page/startPage";
import Dialogs from "../pages/dialogs/dialogs";
import PropTypes from 'prop-types';

function App({ dialogsData, addMessage, messageValue }) {

    App.propTypes = {
        dialogsData: PropTypes.array,
        addMessage: PropTypes.func,
        messageValue: PropTypes.string
    };

    return (
        <BrowserRouter>
            <PageWrapper>
                <StyledHeader>
                    <Logo />
                </StyledHeader>
                <StyledNavWrapper>
                    <Nav />
                </StyledNavWrapper>
                <StyledMain>
                    <Routes>
                        <Route path='/' Component={StartPage} />
                        <Route path='/my-page' Component={MyPage} />
                        <Route exact path='/dialogs/*' element={<Dialogs dialogsData={dialogsData} addMessage={addMessage} messageValue={messageValue} />} />
                        <Route exact path='//*' element={<MyComponents />} />
                    </Routes>
                </StyledMain>
                <StyledFooter>ТУТ БУДЕТ МОДНЫЙ ФУТЕР</StyledFooter>
            </PageWrapper>
        </BrowserRouter>
    )
}

export default App;