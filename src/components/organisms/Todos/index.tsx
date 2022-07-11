import { nanoid } from '@reduxjs/toolkit'

import { Todos } from './types'
import { InputToggle, Todo } from 'components/molecules'

import { Container, ListWrapper, TabsContainer } from './Stylesheet'
import { SimpleTab, EmojiPicker } from 'components/atoms'
import { FormEvent, useState } from 'react'

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

  const [todos, setTodos] = useState(mockedTodos)
  const [emoji, setEmoji] = useState('')

  const createTodo = (e: FormEvent) => {
    const target = e.target as HTMLFormElement

    setTodos(prevState => [
      ...prevState,
      {
        text: target.todo.value,
        checked: false,
        color: '#0094FF',
        emoji: emoji,
        id: nanoid()
      }
    ])
  }

  return (
    <Container>
      <TabsContainer>
        <SimpleTab name="Pendentes" active />
        <SimpleTab name="Concluídas" />
      </TabsContainer>
      <ListWrapper>
        {todos.map(({ id, ...todoProps }) => {
          return <Todo key={id} {...todoProps} />
        })}
      </ListWrapper>
      <InputToggle
        onSubmit={createTodo}
        text="+ Create new todo"
        inputProps={{
          placeholder: 'Digite o nome do seu todo aqui',
          name: 'todo'
        }}
        EndInputElements={
          <EmojiPicker onEmojiClick={({ emoji }) => setEmoji(emoji)} />
        }
      />
    </Container>
  )
}

export default TodoTabs
