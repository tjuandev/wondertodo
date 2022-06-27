import { nanoid } from '@reduxjs/toolkit'

import { Todos } from './types'
import { Todo } from 'components/molecules'

import { ListWrapper } from './Stylesheet'

export const TodoList = () => {
  const mockedTodos: Todos = [
    {
      text: 'Todo 1',
      checked: false,
      color: '#0094FF',
      emoji: '🪥',
      id: nanoid()
    },
    {
      text: 'Todo 2',
      checked: false,
      color: '#FF5C00',
      emoji: '🎉',
      id: nanoid()
    },
    {
      text: 'Todo 3',
      checked: false,
      color: '#FF1B6D',
      emoji: '🎁',
      id: nanoid()
    }
  ]

  return (
    <ListWrapper>
      {mockedTodos.map(({ id, ...todoProps }) => {
        return <Todo key={id} {...todoProps} />
      })}
    </ListWrapper>
  )
}
