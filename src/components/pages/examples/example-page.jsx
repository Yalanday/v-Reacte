import { Link, Routes, Route } from "react-router-dom";
import { ButtonExample, StyledExample, TitleExample } from "./style";
import TaskWrapper from "./task/task-wrapper";
import CircleWrapper from "./circles/circle-wrapper";

function Examples() {
    return (
        <StyledExample>
            <Link to="/examples/task-wrapper">Список задач</Link>
            <Link to="/examples/circle">Кружочки</Link>
            <TitleExample>Название компонента</TitleExample>
            <Routes>
                <Route path='/task-wrapper' Component={TaskWrapper} />
                <Route path='/circle' Component={CircleWrapper} />
            </Routes>
            <ButtonExample>Скачать код</ButtonExample>
        </StyledExample>
    )
}

export default Examples;