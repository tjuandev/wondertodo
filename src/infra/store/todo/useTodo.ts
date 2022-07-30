import { setTodos } from './slice'
import { useTypedDispatch, useTypedSelector } from 'infra/store/useHelpers'
import { TodoState } from './types'
import { useCallback } from 'react'

export function useTodo() {
  const dispatch = useTypedDispatch()

  const state = {
    todo: useTypedSelector(state => state.todo)
  }

  const setState = {
    setTodos: useCallback(
      (todos: TodoState) => dispatch(setTodos(todos)),
      [dispatch]
    )
  }

  return {
    ...state,
    ...setState
  }
}
