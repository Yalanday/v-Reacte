import { useState } from 'react';
import Circle from './circle-component/circle'
import { StyledWrapper } from './style';

function CircleWrapper() {
  
  let [items, setItems] = useState([
    { id: 1, min: 0, max: 10, value: 5 },
    { id: 2, min: 0, max: 15, value: 7 },
    { id: 3, min: 0, max: 20, value: 3 }
  ]);

  function setItemValue(id, newValue) {
    setItems(items.map(item =>
      item.id !== id ? item : { ...item, value: newValue }
    ));
  }

  let itemElements = items.map(item =>
    <Circle
      key={item.id}
      min={item.min}
      max={item.max}
      value={item.value}
      changed={newValue => setItemValue(item.id, newValue)}
    />
  )

  return (
    <StyledWrapper>
      {itemElements}
    </StyledWrapper>
  )
}

export default CircleWrapper;
