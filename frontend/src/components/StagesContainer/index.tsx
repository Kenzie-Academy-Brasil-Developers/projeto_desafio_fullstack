import { IStageProps } from '../../interfaces/props.interface';
import { StyledStagesContainer } from './style';

export const StagesContainer = ({ count }: IStageProps) => {
    return (
        <StyledStagesContainer>
            {count === 1 &&
                <>
                    <div className='stage_circle'>
                        <small>Preencha com suas informações</small>
                        <p>1</p>
                    </div>
                    <div className="stage_line"></div>
                    <div className='stage_circle'>
                        <span>2</span>
                    </div>
                    <div className="stage_line"></div>
                    <div className='stage_circle'>
                        <span>3</span>
                    </div>
                </>}
            {count === 2 &&
                <>
                    <div className='stage_circle finished'>
                        <span>1</span>
                    </div>
                    <div className="stage_line finished"></div>
                    <div className='stage_circle'>
                        <small>Insira seus contatos</small>
                        <span>2</span>
                    </div>
                    <div className="stage_line"></div>
                    <div className='stage_circle'>
                        <span>3</span>
                    </div>
                </>}
            {count === 3 &&
                <>
                    <div className='stage_circle finished'>
                        <span>1</span>
                    </div>
                    <div className="stage_line finished"></div>
                    <div className='stage_circle finished'>
                        <span>2</span>
                    </div>
                    <div className="stage_line finished"></div>
                    <div className='stage_circle finished'>
                        <span>3</span>
                    </div>
                </>}
        </StyledStagesContainer>
    )
}