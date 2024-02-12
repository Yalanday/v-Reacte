import { Link } from "react-router-dom";
import {
    StyledExample, TitleExample, LinkWrapper,
    LinkContent, VideoPrevievComponent, ComponentName
} from "./style";

function MyComponents() {

    return (
        <StyledExample>
            <Link to="/my-components-previev/*"><TitleExample>Мои компоненты</TitleExample></Link>
            <LinkWrapper>
                <Link to="/my-components/task-wrapper" >
                    <LinkContent>
                        <VideoPrevievComponent autoPlay loop muted><source src="/src/video/tasks.mp4" type="video/mp4" /></VideoPrevievComponent>
                        <ComponentName>Список задач</ComponentName>
                    </LinkContent>
                </Link>
                <Link to="/my-components/circle"><LinkContent>
                    <VideoPrevievComponent autoPlay loop muted><source src="/src/video/circle.mp4" type="video/mp4" /></VideoPrevievComponent>
                    <ComponentName>Кружочки</ComponentName>
                </LinkContent></Link>
            </LinkWrapper>
        </StyledExample>
    )
}

export default MyComponents;