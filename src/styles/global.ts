import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('../fonts/montserrat-regular.woff2') format('woff2');
    }

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
