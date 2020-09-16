import { screen } from '@testing-library/react'
import { renderWithTheme } from '~/utils/tests/helpers'

import SplashScreen from '.'

describe('<SplashScreen />', () => {
  it('should render the heading', () => {
    renderWithTheme(<SplashScreen />)

    expect(screen.getByLabelText(/Gabriel França/i)).toBeInTheDocument()
  })
})
