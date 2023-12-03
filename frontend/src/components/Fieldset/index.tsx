import { IFieldsetProps } from "../../interfaces/props.interface"


export const Fieldset = ({ label, info }: IFieldsetProps) => {
    return (
        <div className="info_fieldset">
            <span className="info_fieldset--label">{label}</span>
            <span className="info_fieldset--info">{info}</span>
        </div>
    )
}