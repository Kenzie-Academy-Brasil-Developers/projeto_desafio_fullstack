import { ForwardedRef, forwardRef } from "react";
import { IInputProps } from "../../interfaces";

const Input = forwardRef((
    { id, label, error, ...rest }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
) => (
    <div className="input_container">
        <div className="input_fieldset">
            {label && <label htmlFor={id}>{label}</label>}
            <input id={id} ref={ref} {...rest} />
        </div>
        {error && <small >{error}</small>}
    </div >
)
);

export default Input;
