import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import Examples from "../pages/examples/example-page";
import MyPage from "../pages/my-page/my-page";
import { PageWrapper, StyledFooter, StyledHeader, StyledMain, StyledNavWrapper } from "./style";
import StartPage from "../pages/start-page/start-page";
import Dialogs from "../pages/dialogs/dialogs";
import PropTypes from 'prop-types';

function App({ dialogsData, addMessage }) {

    App.propTypes = {
        dialogsData: PropTypes.array,
        addMessage: PropTypes.func
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
                        <Route exact path='/dialogs/*' element={<Dialogs dialogsData={dialogsData} addMessage={addMessage} />} />
                        <Route exact path='/examples/*' element={<Examples />} />
                    </Routes>
                </StyledMain>
                <StyledFooter>ТУТ БУДЕТ МОДНЫЙ ФУТЕР</StyledFooter>
            </PageWrapper>
        </BrowserRouter>
    )
}

export default App;