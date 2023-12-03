import { IDashboardListItem } from "../../../interfaces/props.interface";
import { Fieldset } from "../../Fieldset"


export const DashboardListItem = ({ number, info }: IDashboardListItem) => {
    return (
        <li>
            <h4>Contato {number}</h4>
            <Fieldset label={"Nome"} info={info.name} />
            <Fieldset label={"Email"} info={info.email} />
            <Fieldset label={"Telefone"} info={info.telephone} />
        </li>
    )
}