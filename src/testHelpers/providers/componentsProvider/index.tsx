import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MainProvider } from 'utils/providers/mainProviders'

const withProviders = (children: ReactNode) =>
  render(<MainProvider>{children}</MainProvider>)

export default withProviders
