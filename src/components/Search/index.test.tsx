import { render, screen, fireEvent } from '@testing-library/react'
import Search from '.'
import AllTheProviders from 'utils/test-providers'
import singletonRouter from 'next/router'

jest.mock('next/router', () => require('next-router-mock'))
jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Search', () => {
  it('renders placeholder text', () => {
    const placeholderText = 'Watch movies tv shows and more!'
    render(
      <AllTheProviders>
        <Search placeholder={placeholderText} />
      </AllTheProviders>
    )
    expect(screen.getByPlaceholderText(placeholderText)).toHaveProperty(
      'placeholder',
      placeholderText
    )
  })

  it('redirects to other page', async () => {
    const placeholderText = 'Watch movies tv shows and more!'
    render(
      <AllTheProviders>
        <Search placeholder={placeholderText} />
      </AllTheProviders>
    )

    const inputValue = 'miodowe lata'
    const input = screen.getByPlaceholderText(placeholderText)
    fireEvent.change(input, { target: { value: inputValue } })
    fireEvent.submit(input)
    singletonRouter.push(`/search/${inputValue}`)
    expect(singletonRouter).toMatchObject({
      pathname: encodeURI(`/search/${inputValue}`),
    })
  })
})
