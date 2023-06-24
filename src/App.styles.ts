import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton'
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
    }
`

export const Wrapper = styled.div`
   margin: 40px;
`;

export const  StyledButton  = styled(IconButton)`
   position: fixed;
   z-index: 100;
   right: 20px;
   top: 90px; 
   `;
