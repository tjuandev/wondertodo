import { createTodo, fetchAllTodos } from './slice'
import { useTypedDispatch, useTypedSelector } from 'store/useHelpers'
import { Todo } from './types'

export function useTodo() {
  const dispatch = useTypedDispatch()

  const state = {
    todo: useTypedSelector(state => state.todo)
  }

  const setState = {
    setInitialTodos: () => dispatch(fetchAllTodos()),
    setTodo: (todo: Todo) => dispatch(createTodo(todo))
  }

  return {
    ...state,
    ...setState
  }
}
