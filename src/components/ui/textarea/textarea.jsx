import { forwardRef } from "react";

export const Textarea = forwardRef((props, ref) => {
    return <textarea ref={ref} {...props} />;
});

Textarea.displayName = "Textarea";