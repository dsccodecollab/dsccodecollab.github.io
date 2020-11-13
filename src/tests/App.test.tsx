import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'
import '@testing-library/jest-dom/extend-expect'

test('renders learn react link', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/&quot;Welcome to The Coding Culture&quot;/i)
  expect(linkElement).toBeInTheDocument()
})
