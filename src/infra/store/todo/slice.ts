import { createSlice } from '@reduxjs/toolkit'
import { TodoState } from './types'

const initialState: TodoState = {
  data: [],
  error: ''
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos: (_, { payload }) => payload
  }
})

export const { setTodos } = slice.actions

export default slice.reducer
