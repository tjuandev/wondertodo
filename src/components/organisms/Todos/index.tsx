import { nanoid } from '@reduxjs/toolkit'

import { Todos } from './types'
import { InputToggle, Todo } from 'components/molecules'

import { Container, ListWrapper } from './Stylesheet'

const TodoTabs = () => {
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

  const keyUps = ['ctrl', '+']

  return (
    <Container>
      <ListWrapper>
        {mockedTodos.map(({ id, ...todoProps }) => {
          return <Todo key={id} {...todoProps} />
        })}
      </ListWrapper>
      <InputToggle
        text="+ Create new todo"
        keyUps={keyUps}
        inputProps={{ placeholder: 'Digite o nome do seu todo aqui' }}
      />
    </Container>
  )
}

export default TodoTabs
