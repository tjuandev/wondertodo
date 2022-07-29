import { nanoid } from '@reduxjs/toolkit'

import { InputToggle, Todo } from 'components/molecules'

import { Container, ListWrapper, TabsContainer } from './Stylesheet'
import { SimpleTab, EmojiPicker } from 'components/atoms'
import { FormEvent, useEffect, useState } from 'react'

import { useTodo } from 'store/todo'

const TodoTabs = () => {
  const { todo, setTodo, setInitialTodos } = useTodo()
  const [emoji, setEmoji] = useState('')

  const createTodo = (e: FormEvent) => {
    const target = e.target as HTMLFormElement

    setTodo({
      text: target.todo.value,
      checked: false,
      color: '#0094FF',
      emoji,
      id: nanoid()
    })

    setEmoji('')
  }

  useEffect(() => {
    if (todo.status === 'idle') {
      setInitialTodos()
    }
  }, [setInitialTodos, todo])

  return (
    <Container>
      <TabsContainer>
        <SimpleTab name="Pendentes" active />
        <SimpleTab name="Concluídas" />
      </TabsContainer>
      <ListWrapper>
        {todo.status === 'pending' ? (
          <>loading</>
        ) : (
          todo.data.map(({ id, ...todoProps }) => {
            return <Todo key={id} {...todoProps} />
          })
        )}
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
