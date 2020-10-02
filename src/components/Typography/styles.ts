import styled, { css } from 'styled-components'

import { TypographyProps } from '.'

export const Wrapper = styled.span<TypographyProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.typography.fonts[variant!].fontSize};
    font-weight: ${theme.typography.fonts[variant!].fontWeight};
  `}
`
