import { useRegister } from '../../hooks/useRegister';
import { DashboardListItem } from './DashboardListItem';
import { DashboardListContainer } from './style';


export const DashboardList = () => {

    const { contacts } = useRegister()
    return (
        <DashboardListContainer>
            {contacts.map((element, index) => <DashboardListItem number={index} info={element} />)}
        </DashboardListContainer>
    )
}