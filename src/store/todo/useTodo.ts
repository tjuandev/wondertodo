import { addTodo } from './slice'
import { useTypedDispatch, useTypedSelector } from 'store/useHelpers'
import { Todo } from './types'

export function useTodo() {
  const dispatch = useTypedDispatch()

  const state = {
    todo: useTypedSelector(state => state.todo)
  }

  const setState = {
    setAddTodos: (payload: Todo) => dispatch(addTodo(payload))
  }

  return {
    ...state,
    ...setState
  }
}
