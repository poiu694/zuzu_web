import styled from '@emotion/styled';
import * as React from "react";
import theme from "../theme";

export enum ButtonHierarchy {
    Primary = "Primary",
    Secondary = "Secondary"
}

export interface ButtonProps {
    hierarchy: ButtonHierarchy;
    children: React.ReactNode;
    full?: boolean;
    disabled?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => unknown;
}

export function Button(props: ButtonProps) {
    return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

const ButtonWrapper = styled.button<ButtonProps>`
    padding: 15px;
    border-radius: ${(props) => props.full ? '0' : '8px'};
    color: ${(props) => props.disabled ? theme.palette.gray300 : theme.colors.text.special};
    background-color: ${(props) => {
        if (props.hierarchy === ButtonHierarchy.Secondary) return theme.palette.gray400;
        else if (props.disabled) return theme.palette.gray500;
        return theme.colors.primary.default;
    }};
    outline: none;
    border: none;
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
`;