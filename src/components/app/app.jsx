import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from "../logo/logo";
import Nav from "../nav/nav";
import MyComponents from "../pages/my-components/myComponents";
import { PageWrapper, StyledFooter, StyledHeader, StyledMain, StyledNavWrapper } from "./style";
import StartPage from "../pages/start-page/startPage";
import PropTypes from 'prop-types';
import RoutesMyComponents from "../pages/my-components/routesMyComponents";
import MyPageContainer from "../pages/my-page/myPageContainer.jsx";
import DialogsContainer from "../pages/dialogs/dialogsContaider.jsx";

function App({ dialogsData, messageValue, dispatch, myPosts, postValue }) {

    App.propTypes = {
        dispatch: PropTypes.func,
        dialogsData: PropTypes.array,
        addMessage: PropTypes.func,
        updateNewMessage: PropTypes.func,
        messageValue: PropTypes.string,
        myPosts: PropTypes.array,
        postValue: PropTypes.string
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
                        <Route path='/' element={<StartPage />} />
                        <Route path='/my-page' element={<MyPageContainer myPosts={myPosts} dispatch={dispatch} postValue={postValue} />} />
                        <Route exact path='/dialogs/*' element={<DialogsContainer
                            dialogsData={dialogsData}
                            messageValue={messageValue}
                            dispatch={dispatch}
                        />} />
                        <Route exact path='/my-components-previev/*' element={<MyComponents />} />
                        <Route exact path='/my-components/*' element={<RoutesMyComponents />} />
                    </Routes>
                </StyledMain>
                <StyledFooter>ТУТ БУДЕТ МОДНЫЙ ФУТЕР</StyledFooter>
            </PageWrapper>
        </BrowserRouter>
    )
}

export default App;
