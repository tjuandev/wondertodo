import { combineReducers } from '@reduxjs/toolkit'
import todo from './todo/slice'

const rootReducer = combineReducers({
  todo
})

export default rootReducer
