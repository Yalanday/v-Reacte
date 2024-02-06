import { Link, Routes, Route } from "react-router-dom";
import { ButtonExample, StyledExample, TitleExample } from "./style";
import TaskWrapper from "./task/taskWrapper";
import CircleWrapper from "./circles/circleWrapper";

function MyComponents() {
    return (
        <StyledExample>
            <Link to="/my-components/task-wrapper">Список задач</Link>
            <Link to="/my-components/circle">Кружочки</Link>
            <TitleExample>Название компонента</TitleExample>
            <Routes>
                <Route path='/task-wrapper' Component={TaskWrapper} />
                <Route path='/circle' Component={CircleWrapper} />
            </Routes>
            <ButtonExample>Скачать код</ButtonExample>
        </StyledExample>
    )
}

export default MyComponents;