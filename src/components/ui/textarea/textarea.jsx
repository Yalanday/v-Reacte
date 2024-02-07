import { forwardRef } from "react";
// import { StyledTextarea } from "./style";
// import PropTypes from 'prop-types';


export const Textarea = forwardRef((props, ref) => {
    return <textarea ref={ref} {...props} />;
});

Textarea.displayName = "Textarea";