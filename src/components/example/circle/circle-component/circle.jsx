import { StyledCircle, StyledButton, StyledValue } from "./style.js";
import PropTypes from 'prop-types';

Circle.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  changed: PropTypes.func.isRequired,
};

function Circle({ min, max, value, changed }) {
  let canDec = min < value;
  let canInc = max > value;
  let size = value * 20 + "px";
  let widthCircle = {width: size, height: size};

  function decrease() {
    if (canDec) return changed(value - 1);
  }

  function increase() {
    if (canInc) return changed(value + 1);
  }

  return (
    <>
      <StyledButton onClick={decrease}>-</StyledButton>
      <StyledValue>{value}</StyledValue>
      <StyledButton onClick={increase}>+</StyledButton>
      <StyledCircle style={widthCircle} />
    </>
  )
}

export default Circle;

