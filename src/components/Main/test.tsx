import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the main', () => {
    const { container } = render(<Main />)

    expect(screen.getByLabelText(/Gabriel França/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
