import { useState } from 'react';
import Tasks from './task-component/tasks';
import { StyledWrapper } from "./style";

function TaskWrapper() {

    let [items, setItems] = useState([
        { id: 1, title: "Подтягивания", value: 0, max: 4 },
        { id: 2, title: "Приседания", value: 0, max: 6 },
        { id: 3, title: "Становая", value: 0, max: 8 },
        { id: 4, title: "Бицепс/Трицепс", value: 0, max: 10},
    ]);

function setItemValue(id, newValue) {
    setItems(items.map(item =>
        item.id !== id ? item : { ...item, value: newValue}
        ));
}


    let itemElements = items.map(item => 
        <Tasks
        key={item.id}
        value ={item.value}
        max = {item.max}
        title = {item.title}
        changed={newValue => setItemValue(item.id, newValue)}
        />
    )

    return (
        <StyledWrapper>
            {itemElements}
        </StyledWrapper>
    )
}

export default TaskWrapper;