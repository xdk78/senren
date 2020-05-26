import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import Search from './index'
import AllTheProviders from 'utils/test-providers'
import { withTestRouter } from 'utils/withTestRouter'

const push = jest.fn()

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

  it('redirects to other page', () => {
    const placeholderText = 'Watch movies tv shows and more!'
    render(
      withTestRouter(
        <AllTheProviders>
          <Search placeholder={placeholderText} />
        </AllTheProviders>,
        {
          push,
        }
      )
    )
    const inputValue = 'miodowe lata'
    const input = screen.getByPlaceholderText(placeholderText)
    fireEvent.change(input, { target: { value: inputValue } })
    fireEvent.submit(input)
    expect(push).toHaveBeenCalledWith(`/search/${inputValue}`)
  })
})
