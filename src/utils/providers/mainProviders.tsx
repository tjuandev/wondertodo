import { ReactNode } from 'react'
import store from 'store'
import { Provider } from 'react-redux'

type MainProviderProps = {
  children: ReactNode
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}
