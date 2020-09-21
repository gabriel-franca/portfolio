import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: ${theme.typography.htmlFontSize};
    }

    html,
    body,
    #__next {
      height: 100%;
    }

    body {
      font-family: ${theme.typography.fontFamily.join(',')};
    }
  `}
`

export default GlobalStyles
