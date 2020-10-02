import theme from '~/styles/theme'

import * as S from './styles'

export type TypographyProps = {
  variant?: keyof typeof theme.typography.fonts
  children?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
}

const Typography = ({
  children,
  variant = 'body1',
  as = 'span'
}: TypographyProps) => (
  <S.Wrapper as={as} variant={variant}>
    {children}
  </S.Wrapper>
)

export default Typography
