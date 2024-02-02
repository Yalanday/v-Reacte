import { PageWrapper, StyledFooter, StyledHeader, StyledMain, StyledNavWrapper } from "./style";

function App() {
    return (
        <PageWrapper>
            <StyledHeader>Header</StyledHeader>
            <StyledMain>
                <StyledNavWrapper>Nav</StyledNavWrapper>
            </StyledMain>
            <StyledFooter>Footer</StyledFooter>
        </PageWrapper>
    )
}

export default App;