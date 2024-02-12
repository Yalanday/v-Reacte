import { Link, Routes, Route } from "react-router-dom";
import {
    WrapperComponent, ButtonExample, TitleExample,    
} from "./style";
import TaskWrapper from "./task/taskWrapper";
import CircleWrapper from "./circles/circleWrapper";

function RoutesMyComponents() {

    return (
        <WrapperComponent>
            <Link to="/my-components-previev/*"><TitleExample>Мои компоненты</TitleExample></Link>
                              
                    <Routes >
                        <Route path='/task-wrapper' element={<TaskWrapper />} />
                        <Route path='/circle' element={<CircleWrapper />} />
                    </Routes>
                    <ButtonExample>Скачать код</ButtonExample>
        </WrapperComponent>
    )
}

export default RoutesMyComponents