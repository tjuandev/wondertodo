import userEvent from '@testing-library/user-event'
import { render } from '@testing-library/react'
import { ReactElement } from 'react'

export const setupUserEvent = (element: ReactElement) => ({
  user: userEvent.setup(),
  ...render(element)
})
