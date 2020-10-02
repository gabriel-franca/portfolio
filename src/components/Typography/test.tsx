import { screen } from '@testing-library/react'
import { renderWithTheme } from '~/utils/tests/helpers'

import Typography from '.'

describe('<Typography />', () => {
  it('should render body1 as default', () => {
    const { container } = renderWithTheme(<Typography>typography</Typography>)

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '1.6rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render headline1', () => {
    const { container } = renderWithTheme(
      <Typography variant="headline1">typography</Typography>
    )

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '4.8rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render headline2', () => {
    const { container } = renderWithTheme(
      <Typography variant="headline2">typography</Typography>
    )

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '3.4rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render headline3', () => {
    const { container } = renderWithTheme(
      <Typography variant="headline3">typography</Typography>
    )

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '2.4rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render body2', () => {
    const { container } = renderWithTheme(
      <Typography variant="body2">typography</Typography>
    )

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '1.4rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render caption', () => {
    const { container } = renderWithTheme(
      <Typography variant="caption">typography</Typography>
    )

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '1.2rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render overline', () => {
    const { container } = renderWithTheme(
      <Typography variant="overline">typography</Typography>
    )

    expect(screen.getByText(/typography/i)).toHaveStyle({
      'font-size': '1rem',
      'font-weight': 'normal'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render span as default', () => {
    const { container } = renderWithTheme(<Typography>typography</Typography>)

    expect(container.querySelector('span'))
  })

  it('should render paragraph', () => {
    const { container } = renderWithTheme(
      <article>
        <Typography as="p">typography</Typography>
      </article>
    )

    // expect(container.querySelector('p')).toBeInTheDocument()
    expect(screen.getByRole('paragraph')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
