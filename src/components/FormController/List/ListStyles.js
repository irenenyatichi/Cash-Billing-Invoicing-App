import styled, { css } from 'styled-components';
import { primaryFontStyles } from '../../../utilities/TypographyStyles';
import {
    Input as InputStyles,
    Fieldset as FieldsetStyles,
    Legend as LegendStyles,
    InputWrapper as InputWrapperStyles,
    Label as LabelStyles,
    Error as ErrorStyles,
} from '../Form/FormStyles';

export const Fieldset = styled(FieldsetStyles)`
    gap: 48px;
`;

export const Legend = styled(LegendStyles)``;

export const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    gap: 18pax;
`;

export const InputsGroup = styled.div`
    display: grid;
    grid-template-columns: minimax(64px, 1fr) minmax(100px, 1fr) minmax(65px, 94px) auto;
    grid-template-rows: auto auto;
    grid-template-areas: 'name name name name' 'qty price total delete';
    width: 100%;
    row-gap: 18px;
    column-gap: 16px;

    @media (min-width: 768px){
        grid-template-columns: 214px 51px 100px 1fr;
        grid-template-areas: 'name qty price total delete';
        grid-template-rows: auto;
    }`;

    export const InputWrapper = styled(InputWrapperStyles)`
    min-width:unset;
    &:nth-child(1){ grid-area: Name;}
    &:nth-child(2){ grid-area: Quantity;}
    &:nth-child(3){ grid-area: Price;}
    &:nth-child(4){ grid-area: Total;}
    &:nth-child(5){ grid-area: Delete;}
    `;

    export const Label = styled(LabelStyles)`
    ${({ $srOnly }) =>
        $srOnly === true && css `
            position: absolute;
            top: auto;
            left: -10000px;
            width: 1px;
            height: 1px;
            overflow:h hidden;
            `}
    `;

    export const Error = styled(ErrorStyles)``;

    export const Input = styled(InputStyles)`
    ${({ $qty }) =>
        $qty && css `
            @media (min-width: 768px){
                padding-left: 0;
                padding-right: 0;
                text-align: center;
            }`
    }`;

    export const TotalValue = styled.span`
        ${primaryFontStyles}
            display: flex ;
            width: 100%;
            height: 100%;
            align-items: center;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.textSecondary};
            transition: color 400ms ease-in-out;
    `;

    export const Delete = styled.button`
    align-self: end;
    border: none;
    background-color: transparent;
    marging-bottom: 15px;
    cursor: pointer;

    &:focus { outline: none; }

    &:focus-visible {
        outline: 2px dashed ${({ theme }) => theme.colors.putple};
        outline-offset: 3px;
    }

    @media (min-width:768px){
        svg { color: ${({ theme }) => theme.colors.red};}
        &: hover{ svg { color: ${({ theme }) => theme.colors.red}}};
    }`;