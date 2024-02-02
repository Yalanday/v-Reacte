import { ButtonExample, StyledExample, TitleExample } from "./style";
import TaskWrapper from "./task/task-wrapper";

function Examples() {
    return (
        <StyledExample>
        <TitleExample>Название компонента</TitleExample>
            <TaskWrapper />
            <ButtonExample>Посмотреть код</ButtonExample>
        </StyledExample>
    )
}

export default Examples;