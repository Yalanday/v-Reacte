import PropTypes from 'prop-types';
import { ButtonTask, NumberTask, ProgressTask, StyledTask, TitleTask } from "./style";


Tasks.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  changed: PropTypes.func.isRequired
}

function Tasks({ title, value, max, changed }) {
  let disabledBtn = max === value;
  let bcgWidth = 500 / max * value + "px";

  function increase() {
    if (value < max) changed(value + 1);
    console.log(value);
  }

  return (
    <>
      <StyledTask>
        <TitleTask>{title}</TitleTask>
        <ProgressTask $bcgWidth={bcgWidth}></ProgressTask>
        <ButtonTask onClick={increase} disabled={disabledBtn}>Подход</ButtonTask>
        <NumberTask>{value}/{max}</NumberTask>
      </StyledTask>
    </>
  )
}

export default Tasks;