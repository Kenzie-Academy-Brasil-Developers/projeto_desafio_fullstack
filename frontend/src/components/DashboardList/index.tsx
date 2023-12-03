import { useAuth } from '../../hooks/useAuth';
import { DashboardListItem } from './DashboardListItem';
import { DashboardListContainer } from './style';


export const DashboardList = () => {

    const { contacts } = useAuth()

    return (
        <DashboardListContainer>
            {contacts.map((element, index) => <DashboardListItem key={index + 1} number={index} info={element} />)}
        </DashboardListContainer>
    )
}