import { StyledNav, StyledLink } from "./style";
 

function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>                    
                <StyledLink to="/my-page">Моя страница</StyledLink>
                </li>
                <li>
                <StyledLink to="/dialogs">Сообщения</StyledLink>
                </li>
                <li>
                    <StyledLink to="/my-components/*">Мои компоненты</StyledLink>
                </li>
                <li>Особенности хуков</li>
                <li>Друзья</li>
            </ul>
        </StyledNav>
    )
}

export default Nav;