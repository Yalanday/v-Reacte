import { StyledLogo } from "./style";
import LogoImage from '/src/assets/react.svg';

function Logo() {
    return (
        <StyledLogo to="/">
            &lt;В<img src={LogoImage} alt="Логотип" />Reacte/&gt;
        </StyledLogo>
    )
}

export default Logo;