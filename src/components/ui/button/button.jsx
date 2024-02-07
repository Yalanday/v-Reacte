import { StyledButton } from "./style";
import PropTypes from 'prop-types';


function Button({click}) {
    Button.propTypes = {
        click: PropTypes.func
    }

    return <StyledButton onClick={click}/>
}

export default Button;