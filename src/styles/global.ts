import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Roboto', sans-serif;
        line-height: 1.3
    }

    body {
        background: ${(props) => props.theme['gray-100']};
        scroll-behavior: smooth
    }
    
    h2, h3 {
        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme['gray-800']}
    }
`
