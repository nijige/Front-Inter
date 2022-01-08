import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ButtonContainer = styled.button`

width:100%,
heigth: 46px;
color:${({theme}) => theme.colors.background};
background:${({theme}) => theme.colors.primary};
border:1px solid ${({theme}) => theme.colors.background} 
border-radius:13px;


margin-botton:20px
display:flex;
justify-content:conter;
z-index:500;

&:hover{
    filter:opacity(0.4)
}
`


