import { StyledNav, StyledLink } from "./style";
 

function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>                    
                <StyledLink to="/my-page">Моя страница</StyledLink>
                </li>
                <li>Сообщения</li>
                <li>
                    <StyledLink to="/examples">Галлерея компонентов</StyledLink>
                </li>
                <li>Особенности хуков</li>
                <li>Друзья</li>
            </ul>
        </StyledNav>
    )
}

export default Nav;