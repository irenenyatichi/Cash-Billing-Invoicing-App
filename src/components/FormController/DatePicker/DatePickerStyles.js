import styled from 'styled-components';
import { defaultInput } from '../DatePicker/DatePicker';
import { buttonDefault } from '../../shared/Button/ButtonStyles';

export const CustomPicker = styled.button`
    ${buttonDefault}    
    ${defaultInput}     
    display:flex;
    justify-content: space-between;
    align-items: center;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
    `;
