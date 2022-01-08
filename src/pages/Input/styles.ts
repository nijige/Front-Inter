import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputContainer = styled.div`

width:100%,
heigth: 46px;
background:${({theme}) => theme.colors.background};
border:1px solid ${({theme}) => theme.colors.background} 
border-radius:13px;


margin-botton:20px
display:flex;
justify-content:conter;
z-index:500;

input{
    font-size:0.75rem;
    font-weight:400;
    background:tranparent;
    border:0;
    width: 138%.
    margin:0 20px
}
`


