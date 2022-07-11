import { nanoid } from '@reduxjs/toolkit'

import { Todos } from './types'
import { InputToggle, Todo } from 'components/molecules'

import { Container, ListWrapper, TabsContainer } from './Stylesheet'
import { SimpleTab, EmojiPicker } from 'components/atoms'
import { useState } from 'react'

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

  const [emoji, setEmoji] = useState('')

  console.log('emoji', emoji)

  return (
    <Container>
      <TabsContainer>
        <SimpleTab name="Pendentes" active />
        <SimpleTab name="Concluídas" />
      </TabsContainer>
      <ListWrapper>
        {mockedTodos.map(({ id, ...todoProps }) => {
          return <Todo key={id} {...todoProps} />
        })}
      </ListWrapper>
      <InputToggle
        text="+ Create new todo"
        inputProps={{ placeholder: 'Digite o nome do seu todo aqui' }}
        EndInputElements={
          <EmojiPicker onEmojiClick={({ emoji }) => setEmoji(emoji)} />
        }
      />
    </Container>
  )
}

export default TodoTabs
