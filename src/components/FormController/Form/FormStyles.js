import styled, {css} from 'styled-components';
import {
    primaryFontStyles,
    secondaryFontStyles,
    headingExtraSmall,
    headingMediumLarge,
    headingLarge,
} from '../../../utilities/TypographyStyles';

const customScrollbar = css `
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.bgFormScroll}transparent;

    &::-webkit-scrollbar{ width: 8px; }

    &::-webkit-scrollbar-track{ background: transparent; }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.bgFormScroll};
        border-radius: 20px;
    }
`;

export const defaultInput = css `
    width: 100%;
    padding: 16px 13px 16px 20px;
    border-radius: 4px;
    border: 1px solid ${({ theme }) => theme.colors.bgInputBorder};
    background-color: ${({ theme }) => theme.colors.bgInput};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 700;
    transition: border 400ms ease-in-out, background-color 400ms ease-in-out, color 400ms ease-in-out;
    -webkit-appearance: none;
    
    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.purple};
        outline: none;
    }
`;

export const Title = styled.h2`
    ${headingLarge}
    margin-bottom:24px;
`;

export const Hashtag = styled.span`
    color: ${({ theme }) => theme.colors.textTertiary};
    transition: color 400ms ease-in-out;
    
    ${({ $error }) =>
        $error && css `
            color: ${({ theme }) => theme.colors.red};
        `};
    `;

export const ErrorsWrapper = styled.div`
    display: flex;
    flex-flow: column;
    margin-top: -15px;
    `;

export const Error = styled.span`
    ${secondaryFontStyles}
    font-size: 0.625rem;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.red};
    opacity: 0;
    animation: fadeIn 350ms ease-in-out forwards;
    
    @keyframes fadeIn{
        0% { opacity:0; }
        100% { opacity:1; }
    }`;

export const Input = styled.input`
    ${primaryFontStyles}
    ${defaultInput}
    ${({ $error }) =>
        $error && css` border:1px solid ${({ theme }) => theme.colors.red};`}`;

export const InputsGroup = styled.div`
    display: flex;
    flex-flow: wrap;
    gap: 24px;
    border: none;

    ${({ $fullWidthMobile}) => $fullWidthMobile && css `
    flex-flow: column;
    @media (min-width:600px){flex-flow: wrap;}`}
`;