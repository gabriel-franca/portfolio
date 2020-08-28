import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => theme.colors.primary.main};

  svg {
    width: 500px;
    fill: ${({ theme }) => theme.colors.common.white};
  }
`
