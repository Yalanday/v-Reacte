import Logo from "../logo/logo";
import Nav from "../nav/nav";
import Examples from "../pages/examples/example-page";
// import MyPage from "../pages/my-page/my-page";
import { PageWrapper, StyledFooter, StyledHeader, StyledMain, StyledNavWrapper } from "./style";

function App() {
    return (
        <PageWrapper>
            <StyledHeader>
                <Logo />
            </StyledHeader>
            <StyledNavWrapper>
                <Nav />
            </StyledNavWrapper>
            <StyledMain>
                {/* <MyPage /> */}
                <Examples />
            </StyledMain>
            <StyledFooter>Footer</StyledFooter>
        </PageWrapper>
    )
}

export default App;