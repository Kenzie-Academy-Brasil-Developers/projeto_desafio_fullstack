import { IDashboardListItem } from "../../../interfaces/props.interface";
import { Fieldset } from "../../Fieldset"


export const DashboardListItem = ({ number, info }: IDashboardListItem) => {
    return (
        <li>
            <h4>Contato {number + 1}</h4>
            <Fieldset label={"Nome"} info={info.full_name} />
            <Fieldset label={"Email"} info={info.email} />
            <Fieldset label={"Telefone"} info={info.telephone} />
        </li>
    )
}