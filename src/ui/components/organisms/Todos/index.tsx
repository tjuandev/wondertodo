import { InputToggle, Todo } from 'ui/components/molecules'

import { Container, ListWrapper, TabsContainer } from './Stylesheet'
import { SimpleTab, EmojiPicker } from 'ui/components/atoms'
import { useEffect, useState } from 'react'

import { useGetAllTodos } from 'data/todos'

const TodoTabs = () => {
  const [emoji, setEmoji] = useState('')
  const { todo, getAllTodos, loading } = useGetAllTodos()

  useEffect(() => {
    getAllTodos('todos')
  }, [getAllTodos])

  /* const createTodo = (e: FormEvent) => {
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
 */

  return (
    <Container>
      <TabsContainer>
        <SimpleTab name="Pendentes" active />
        <SimpleTab name="Concluídas" />
      </TabsContainer>
      <ListWrapper>
        {loading ? (
          <>loading</>
        ) : (
          todo.data?.map(({ id, ...todoProps }) => {
            return <Todo key={id} {...todoProps} />
          })
        )}
      </ListWrapper>
      <InputToggle
        onSubmit={() => console.log('')}
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
