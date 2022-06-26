import { ReactElement } from 'react'
import store from 'store'
import { Provider } from 'react-redux'

type MainProviderProps = {
  children: ReactElement[]
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return <Provider store={store}>{children}</Provider>
}
