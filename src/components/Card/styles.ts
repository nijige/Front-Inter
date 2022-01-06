import styled, { css } from "styled-components";


export const CardContainer = styled.div<{
    width: string;
    height:string;
    noShadow: boolean;

}> `

width:${(props) => props.width};
height: ${(props) => props.height}
background:


${(props) => !props.noShadow && css`
    box-shadow:5px 4px 6px rgba(8,0,8,8,25)
`}
border-radius:20px;
display-flex;
align-itens:center;
flex-direction:column;

z-index:5000

`
