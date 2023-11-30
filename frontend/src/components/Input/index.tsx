import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | null | undefined;
    label: string;
    id: string;
}

const Input = forwardRef((
    { id, label, error, ...rest }: iInputProps,
    ref: ForwardedRef<HTMLInputElement>
) => (
    <div className="input_container">
        <div className="input_fieldset">
            <label htmlFor={id}>{label}</label>
            <input id={id} ref={ref} {...rest} />
        </div>
        {error && <small>{error}</small>}
    </div >
)
);

export default Input;
