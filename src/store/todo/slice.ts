import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Todo, TodoInitialState } from './types'

import { useDatabase } from 'hooks'

export const fetchAllTodos = createAsyncThunk(
  'todo/fetchAllTodos',
  async (_, { rejectWithValue }) => {
    const { read } = useDatabase()

    const { data: response, error } = await read<Todo>('todos')

    if (error) {
      throw rejectWithValue(error)
    }

    return { response }
  }
)

export const createTodo = createAsyncThunk(
  'todo/createTodo',
  async (data: Todo, { rejectWithValue }) => {
    const { create } = useDatabase()

    const { data: response, error } = await create<Todo>('todos', data)

    if (error) {
      throw rejectWithValue(error)
    }

    return { response }
  }
)

const initialState: TodoInitialState = {
  data: [],
  error: '',
  status: 'idle'
}

const slice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.data.push(action.payload)
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchAllTodos.fulfilled, (state, { payload }) => {
      state.data = payload.response
      state.status = 'success'
    })
    builder.addCase(fetchAllTodos.pending, state => {
      state.status = 'pending'
    })
    builder.addCase(fetchAllTodos.rejected, state => {
      state.status = 'reject'
    })
    builder.addCase(createTodo.fulfilled, (state, action) => {
      state.data.push(...action.payload.response)
      state.status = 'success'
    })
    builder.addCase(createTodo.pending, state => {
      state.status = 'pending'
    })
  }
})

export const { addTodo } = slice.actions

export default slice.reducer
